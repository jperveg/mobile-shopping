import config from '../../config'
export const useInitialAppState = () => {
  return localStorage.getItem(config.ROOT_PERSIST)
    ? JSON.parse(localStorage.getItem(config.ROOT_PERSIST))
    : { products: [], productDetailsById: {}, cart: { numProductsInCart: 0 } }
}
