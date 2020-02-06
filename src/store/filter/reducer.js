import { maxBy, minBy } from 'csssr-school-utils';
import { getPrice, getCategory } from '../../utils';
import { CHANGE_FILTER } from './types';

import products from '../../products';

const priceArr = products.map(item => getPrice(item.price));
const minPrice = minBy(item => item, priceArr);
const maxPrice = maxBy(item => item, priceArr);
const categories = getCategory(products);

const initialState = {
  minPrice,
  maxPrice,
  discount: 0,
  categories,
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
