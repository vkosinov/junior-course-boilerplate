import { createStore } from 'redux';
import queryString from 'query-string';

import products from '../products';
import { maxBy, minBy } from 'csssr-school-utils';
import { getPrice, getCategory } from '../utils';
import { reducer } from './reducer';

const priceArr = products.map(item => getPrice(item.price));
const minPrice = minBy(item => item, priceArr);
const maxPrice = maxBy(item => item, priceArr);
const categories = getCategory(products);
const urlParam = queryString.parse(window.location.search);
const activeCategory = urlParam.category || '';

export const initialState = {
  minPrice,
  maxPrice,
  discount: 0,
  activeCategory,
  categories,
};

export const store = createStore(reducer, initialState);
