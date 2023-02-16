import config from '../../config'
export const useInitialAppState = () => {
  const persistedData = localStorage.getItem(config.ROOT_PERSIST)
  return persistedData
    ? JSON.parse(persistedData)
    : {
        products: {
          products: [],
          expiredTimestamp: 0,
        },
        details: { productDetailsById: {} },
        cart: { numProductsInCart: 0 },
      }
}
