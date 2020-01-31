import queryString from 'query-string';

import { maxBy, minBy } from 'csssr-school-utils';
import { getPrice, getCategory } from '../utils';
import { CHANGE_FILTER, CLEAR_FILTER, SET_CATEGORY, GO_TO_PAGE } from './actionTypes';

import products from '../products';

const priceArr = products.map(item => getPrice(item.price));
const minPrice = minBy(item => item, priceArr);
const maxPrice = maxBy(item => item, priceArr);
const categories = getCategory(products);
const urlParam = queryString.parse(window.location.search);
const activeCategory = urlParam.category || '';
const activePage = +urlParam.page || 1;

const initialState = {
  minPrice,
  maxPrice,
  discount: 0,
  activeCategory,
  categories,
  itemsPerPage: 6,
  activePage: activePage,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER: {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        activePage: 1,
      };
    }

    case CLEAR_FILTER: {
      return {
        ...initialState,
        activeCategory: '',
      };
    }

    case SET_CATEGORY: {
      return {
        ...state,
        activeCategory: action.payload,
      };
    }

    case GO_TO_PAGE:
      return {
        ...state,
        activePage: action.payload,
      };
    default:
      return state;
  }
}
