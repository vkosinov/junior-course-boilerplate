import { createContext } from 'react';
import products from './products';
import { maxBy, minBy } from 'csssr-school-utils';
import { getPrice, initialState } from './utils';

const priceArr = products.map(item => getPrice(item.price));

export const minPrice = minBy(item => item, priceArr);
export const maxPrice = maxBy(item => item, priceArr);
export const AppContext = createContext(initialState(minPrice, maxPrice));
