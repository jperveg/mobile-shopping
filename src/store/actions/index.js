import {
  FETCH_PRODUCT_ADDED_TO_CART_SUCCESS,
  FETCH_PRODUCT_DEATAILS_SUCCESS,
} from 'store/actionTypes'

export const searchedProduct = (product) => {
  return {
    type: FETCH_PRODUCT_DEATAILS_SUCCESS,
    payload: product,
  }
}

export const addedProductToCart = (numProductsInCart) => {
  return {
    type: FETCH_PRODUCT_ADDED_TO_CART_SUCCESS,
    payload: numProductsInCart,
  }
}
