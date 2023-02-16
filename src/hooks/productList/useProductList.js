import { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const PRODUCTS_LIST = [
  {
    id: '001',
    brand: 'Oppo',
    model: 'Oppo Reno4 5G',
    price: 263,
    imageURL:
      'https://cdn-files.kimovil.com/phone_front/0004/77/thumb_376092_phone_front_detail.jpeg',
  },
  {
    id: '002',
    brand: 'Apple',
    model: 'iPhone 14',
    price: 839,
    imageURL:
      'https://cdn-files.kimovil.com/phone_front/0007/75/thumb_674877_phone_front_detail.jpg',
  },
  {
    id: '003',
    brand: 'Samsung',
    model: 'Samsung Galaxy Z Flip3 5G',
    price: 509,
    imageURL:
      'https://cdn-files.kimovil.com/phone_front/0006/37/thumb_536983_phone_front_detail.jpeg',
  },
  {
    id: '004',
    brand: 'Samsung',
    model: 'Samsung Galaxy S23 Ultra',
    price: 1489,
    imageURL:
      'https://cdn-files.kimovil.com/phone_front/0008/33/thumb_732956_phone_front_detail.jpg',
  },
  {
    id: '005',
    brand: 'Samsung',
    model: 'Samsung Galaxy A23 5G',
    price: 307,
    imageURL:
      'https://cdn-files.kimovil.com/phone_front/0007/09/thumb_608829_phone_front_detail.jpg',
  },
  {
    id: '006',
    brand: 'Xiomi',
    model: 'Xiaomi 11T Pro',
    price: 389,
    imageURL:
      'https://cdn-files.kimovil.com/phone_front/0006/49/thumb_548613_phone_front_detail.jpeg',
  },
  {
    id: '007',
    brand: 'Xiomi',
    model: 'Xiaomi Redmi Note 12',
    price: 315,
    imageURL:
      'https://cdn-files.kimovil.com/phone_front/0007/94/thumb_693412_phone_front_detail.jpg',
  },
]

export const useProductList = () => {
  const [searchText, setSearchText] = useState('')
  const navigate = useNavigate()
  const products = PRODUCTS_LIST
  // useEffect(() => {
  //   fetch('http://localhost:3001/products')
  //     .then((res) => res.json())
  //     .then((data) => setProductList(data))
  // }, [])

  const filteredProducts = useMemo(() => {
    if (searchText && searchText !== '' && products) {
      return products.filter((podcast) => {
        const { brand, model } = podcast
        const searchInput = searchText.toLocaleLowerCase().trim()
        return (
          brand.toLocaleLowerCase().includes(searchInput) ||
          model.toLocaleLowerCase().includes(searchInput)
        )
      })
    }
  }, [searchText, products])

  const handleChangeSearchInput = useCallback((e) => {
    const searchText = e.target.value
    setSearchText(searchText)
  }, [])

  const handleClickOnProductItem = useCallback(
    (id) => {
      console.log(id)
      navigate(`/details/${id}`)
    },
    [navigate]
  )

  return {
    searchText,
    isFilterActive: Boolean(searchText),
    filteredProducts,
    products,
    handleChangeSearchInput,
    handleClickOnProductItem,
  }
}
