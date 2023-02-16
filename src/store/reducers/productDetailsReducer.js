import { getNextHourTime } from 'utils/utils'
import { FETCH_PRODUCT_DEATAILS_SUCCESS } from 'store/actionTypes'

const initialState = {
  productDetailsById: {},
}

const productDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action
  const productData = payload.product ?? undefined
  const product = {}
  switch (type) {
    case FETCH_PRODUCT_DEATAILS_SUCCESS:
      product[productData.id] = {
        ...productData,
        expiredTimestamp: getNextHourTime(),
      }
      return {
        ...state,
        productDetailsById: { ...state.productDetailsById, ...product },
      }
    default:
      return state
  }
}

export default productDetailsReducer
