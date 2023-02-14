import { useEffect } from 'react'

export const useProductList = () => {
  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((res) => res.json())
      .then((data) => setProductList(data))
  }, [])

  return productList
}
