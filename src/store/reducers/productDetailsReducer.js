import { getNextHourTime } from '../../utils/utils'
import { FETCH_PRODUCT_DEATAILS_SUCCESS } from '../actionTypes'

const initialState = {
  details: {},
}

const productDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action
  const details = payload.product ?? undefined
  const product = {}
  switch (type) {
    case FETCH_PRODUCT_DEATAILS_SUCCESS:
      product[details.id] = { ...details, timestamp: getNextHourTime() }
      return {
        ...state,
        details: { ...state.destails, ...product },
        timestamp: getNextHourTime(),
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

export default productDetailsReducer
