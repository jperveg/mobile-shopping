import { getNextHourTime } from 'utils/utils'
import { FETCH_PRODUCT_LIST_SUCCESS } from 'store/actionTypes'

const initialState = {
  products: [],
  expiredTimestamp: null,
}

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        error: null,
        expiredTimestamp: getNextHourTime(),
      }
    // case FETCH_PODCASTS_LIST_FAILURE:
    //   return {
    //     ...state,
    //     products: [],
    //     error: action.payload.error,
    //     timestamp: null,
    //   }
    default:
      return state
  }
}

export default productListReducer
