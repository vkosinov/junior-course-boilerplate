import { CHANGE_FILTER } from './types';

const initialState = {
  minPrice: 0,
  maxPrice: 0,
  discount: 0,
  categories: [],
};

export function filterReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER: {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }

    default:
      return state;
  }
}
