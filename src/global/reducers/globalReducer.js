import {
  FETCHING_COORDINATE_REQUEST,
  FETCHING_COORDINATE_SUCCESS,
  FETCHING_COORDINATE_FAILURE,
  FETCHING_PLACE_SUCCESS,
  FETCHING_COUPONS_SUCCESS,
  FETCHING_DETAILS_COUPON_SUCCESS,
} from '../actions/mapAction/globalTypes';


const initialState = {
  isFetching: false,
  errorMessage: '',
  dataServer: [],
  dataPlace:[],
  dataCoupons: [],
  dataCoupon: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_COORDINATE_REQUEST:
      return {...state, isFetching: true};
    case FETCHING_COORDINATE_FAILURE:
      return {...state, isFetching: false, errorMessage: action.payload};
    case FETCHING_COORDINATE_SUCCESS:
      return {...state, isFetching: false, dataServer: action.payload};
    case FETCHING_PLACE_SUCCESS:
      return {...state, isFetching: false, dataPlace: action.payload};
    case FETCHING_COUPONS_SUCCESS:
      return {...state, isFetching: false, dataCoupons: action.payload};
    case FETCHING_DETAILS_COUPON_SUCCESS:
      return {...state, isFetching: false, dataCoupons: action.payload};
    default:
        return state;
  }
};

export default dataReducer;