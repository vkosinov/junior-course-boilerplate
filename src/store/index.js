import { createStore } from 'redux';

import products from '../products';
import { maxBy, minBy } from 'csssr-school-utils';
import { getPrice, getCategory } from '../utils';
import { reducer } from './reducer';

const priceArr = products.map(item => getPrice(item.price));
const minPrice = minBy(item => item, priceArr);
const maxPrice = maxBy(item => item, priceArr);
const categories = getCategory(products);
const activeCategory = window.location.pathname.length > 1 ? window.location.pathname.slice(1) : '';

export const initialState = {
  minPrice: minPrice,
  maxPrice: maxPrice,
  discount: 0,
  activeCategory: activeCategory,
  categories,
};

export const store = createStore(reducer, initialState);
