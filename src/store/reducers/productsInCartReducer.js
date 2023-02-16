import { FETCH_PRODUCT_ADDED_TO_CART_SUCCESS } from 'store/actionTypes'

const initialState = {
  numProductsInCart: 0,
}

const productsInCartReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_PRODUCT_ADDED_TO_CART_SUCCESS:
      return { numProductsInCart: payload }
    default:
      return state
  }
}

export default productsInCartReducer
