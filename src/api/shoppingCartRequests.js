import { getFetcher } from 'config/setupFetcher'

const endpoints = {
  addCart: '/api/cart',
}

export const addProductToShoppingCartRequest = (product) => {
  return getFetcher().post(endpoints.addCart, product)
}
