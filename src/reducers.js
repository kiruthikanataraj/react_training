import { ACTIONS } from './types';

const initialState = {
  fetchListing: {},
  fetchListingError:{},
  loader: true
};

const reducers = (prevState, action) => {
  const state = prevState || initialState;
  switch (action.type) {
    case ACTIONS.FETCH_LISTING_SUCESS:
      return {
        ...state,
        fetchListing: action.payload,
      };
    case ACTIONS.FETCH_LISTING_ERROR:
      return {
        ...state,
        fetchListingError: action.payload,
      }
    case ACTIONS.LOADER:
      return {
        ...state,
        loading: action.payload,
      };
    default: return state;
  }
};

export default reducers;


