import { CHANGE_LOADING, CHANGE_ERROR, SET_PRODUCTS } from './types';

const initialState = {
  loading: true,
  error: false,
  items: [],
};

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case CHANGE_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case SET_PRODUCTS: {
      return {
        ...state,
        items: action.payload,
      };
    }

    default:
      return state;
  }
}
