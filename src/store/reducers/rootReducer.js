import productDetailsReducer from './productDetailsReducer'
import productsInCartReducer from './productsInCartReducer'
import productListReducer from './productsListReducer'

export const rootReducer = () => {
  const reducers = {
    products: productListReducer,
    productDetailsById: productDetailsReducer,
    cart: productsInCartReducer,
  }

  return (state = {}, action) => {
    const newState = {}
    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action)
    }
    return newState
  }
}
