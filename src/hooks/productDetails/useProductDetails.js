import { useNavigate } from 'react-router-dom'
import { useRequest } from 'hooks'
import config from '../../config'
import { AppStateContext } from 'contexts/AppContext'
import { useCallback, useContext, useEffect, useState } from 'react'
import { dateIsAfter } from 'utils/utils'
import { getProductByIdRequest } from 'api/productsRequests'
import { addedProductToCart, searchedProduct } from 'store/actions'
import { addProductToShoppingCartRequest } from 'api/shoppingCartRequests'

const formInitialValues = { storage: null, color: null }

export function useProductDetails(productId) {
  const navigate = useNavigate()

  const [valuesForm, setValuesForm] = useState(formInitialValues)
  const [isAddShoppingCartEnabled, setIsAddShoppingCartEnabled] =
    useState(false)

  const { state, dispatch } = useContext(AppStateContext)
  const { details: productDetailsById } = state

  const { fetch, data: product, isLoading } = useRequest(getProductByIdRequest)

  const {
    fetch: fetchPostAddToCart,
    data: numProductsInCart,
    // isLoading: isLoadingCart,
  } = useRequest(addProductToShoppingCartRequest)

  useEffect(() => {
    if (
      !productDetailsById[productId] ||
      (productDetailsById[productId] &&
        dateIsAfter(productDetailsById[productId].expiredTimestamp))
    ) {
      fetch(productId)
    }
  }, [productDetailsById, fetch, productId])

  useEffect(() => {
    if (product) {
      dispatch(searchedProduct(product))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product])

  useEffect(() => {
    if (numProductsInCart) {
      dispatch(addedProductToCart(numProductsInCart))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numProductsInCart])

  const handleChangePropSelector = useCallback(
    (e) => {
      const newValuesForm = { ...valuesForm }
      newValuesForm[e.target.name] = e.target.value
      setValuesForm(newValuesForm)
      setIsAddShoppingCartEnabled(
        newValuesForm.storage !== -1 && newValuesForm.color !== -1
      )
    },
    [valuesForm]
  )

  // const product = PRODUCTS_LIST.find((product) => product.id === productId)

  const handleGoBack = () => {
    navigate(config.BASE_URL)
  }

  const handleAddShoppingCart = useCallback(() => {
    const productToCart = product ?? productDetailsById[productId]
    fetchPostAddToCart({
      id: productToCart.id,
      color: valuesForm.color,
      storage: valuesForm.storage,
    })
  }, [
    fetchPostAddToCart,
    product,
    productDetailsById,
    productId,
    valuesForm.color,
    valuesForm.storage,
  ])

  return {
    product: product ?? productDetailsById[productId],
    handleGoBack,
    valuesForm,
    handleChangePropSelector,
    isAddShoppingCartEnabled,
    handleAddShoppingCart,
    isLoading,
  }
}
