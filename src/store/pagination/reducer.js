import queryString from 'query-string';

import { GO_TO_PAGE } from './types';

const urlParam = queryString.parse(window.location.search);
const activePage = +urlParam.page || 1;

const initialState = {
  activePage: activePage,
};

export function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case GO_TO_PAGE:
      return {
        ...state,
        activePage: action.payload,
      };

    default:
      return state;
  }
}
