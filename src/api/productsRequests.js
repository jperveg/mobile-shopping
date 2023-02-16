import { getFetcher } from 'config/setupFetcher'

const endpoints = {
  getProducts: '/api/product',
  getProductById: '/api/product/',
}

export const getAllProductsRequest = () => {
  const fetcher = getFetcher()
  return fetcher.get(`${endpoints.getProducts}`)
}

export const getProductByIdRequest = (productId) => {
  const fetcher = getFetcher()
  return fetcher.get(`${endpoints.getProductById}${productId}`)
}
