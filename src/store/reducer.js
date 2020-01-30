import { initialState } from './index';

export function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_FILTER': {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
    case 'CLEAR_FILTER': {
      return {
        ...initialState,
        activeCategory: '',
      };
    }

    case 'SET_CATEGORY': {
      return {
        ...state,
        activeCategory: action.payload,
      };
    }
    default:
      return state;
  }
}
