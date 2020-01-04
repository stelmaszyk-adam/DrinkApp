  import {
    FETCHING_COORDINATE_REQUEST,
    FETCHING_COORDINATE_SUCCESS,
    FETCHING_COORDINATE_FAILURE,
    FETCHING_PLACE_SUCCESS,
    FETCHING_COUPONS_SUCCESS,
    FETCHING_DETAILS_COUPON_SUCCESS,
  } from './globalTypes';
  import {dispatch} from 'rxjs/internal/observable/range';
  
  export const fetchingDataRequest = () => ({type: FETCHING_COORDINATE_REQUEST});
  
  export const fetchingDataSuccess = json => ({
    type: FETCHING_COORDINATE_SUCCESS,
    payload: json,
  });

  export const fetchingDetailsCouponContainerSuccess = json => ({
    type: FETCHING_DETAILS_COUPON_SUCCESS,
    payload: json,
  });

  export const fetchingCouponsSuccess = json => ({
    type: FETCHING_COUPONS_SUCCESS,
    payload: json,
  });

  export const fetchingPlaceSuccess = json => ({
    type: FETCHING_PLACE_SUCCESS,
    payload: json,
  });
  
  export const fetchingDataFailure = error => ({
    type: FETCHING_COORDINATE_FAILURE,
    payload: error,
  });
  
  export const fetchData = (site, usingApi) => {
    return async dispatch => {
      dispatch(fetchingDataRequest());
      try {
        let response = await fetch(site);
        let json = await response.json();
        switch(usingApi)
        {
          case 'mapContainer':
              dispatch(fetchingDataSuccess(json));
              break;
          case 'placeContainer':
              dispatch(fetchingPlaceSuccess(json));
              break;
          case 'couponsContainer':
              dispatch(fetchingCouponsSuccess(json));
              break;
          case 'detailsCouponContainer':
              dispatch(fetchingDetailsCouponContainerSuccess(json));
              break;
        }
      } catch (error) {
        dispatch(fetchingDataFailure(error));
      }
    };
  };