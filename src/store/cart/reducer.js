import { TOGGLE_TO_CART, CLEAR_CART, SAVE_CART, LOADING_CART, ERROR_CART } from './types';

const initialState = {
  items: [],
  save: '',
  loading: false,
  error: '',
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_TO_CART: {
      return {
        ...state,
        items: action.payload,
      };
    }

    case CLEAR_CART: {
      return {
        ...state,
        items: [],
      };
    }

    case SAVE_CART: {
      return {
        ...state,
        save: action.payload,
      };
    }

    case LOADING_CART: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case ERROR_CART: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}
