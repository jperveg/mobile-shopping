import { useProductDetails } from 'hooks/productDetails/useProductDetails'
import { useParams } from 'react-router-dom'
import { ProductDetailView } from './view'

export const ProductDetail = () => {
  const { productId } = useParams()
  const {
    product,
    handleGoBack,
    valuesForm,
    handleChangePropSelector,
    isAddShoppingCartEnabled,
    handleAddShoppingCart,
    isLoading,
  } = useProductDetails(productId)
  return (
    <ProductDetailView
      product={product}
      isLoading={isLoading}
      handleGoBack={handleGoBack}
      isAddShoppingCartEnabled={isAddShoppingCartEnabled}
      handleAddShoppingCart={handleAddShoppingCart}
      handleChangePropSelector={handleChangePropSelector}
      valuesForm={valuesForm}
    />
  )
}
