import productDetailsReducer from './productDetailsReducer'
import productListReducer from './productsListReducer'

export function rootReducer() {
  const reducers = {
    products: productListReducer,
    details: productDetailsReducer,
  }

  return (state = {}, action) => {
    const newState = {}
    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action)
    }
    return newState
  }
}
