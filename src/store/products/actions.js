import { CHANGE_LOADING, CHANGE_ERROR, SET_PRODUCTS } from './types';
import { changeFilter } from '../filter/actions';
import { maxBy, minBy } from 'csssr-school-utils';
import { getCategory } from '../../utils';

export const changeLoading = value => {
  return {
    type: CHANGE_LOADING,
    payload: value,
  };
};

export const changeError = error => {
  return {
    type: CHANGE_ERROR,
    payload: error,
  };
};

export const setProduct = products => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const setFilters = products => {
  return dispatch => {
    dispatch(changeFilter('maxPrice', maxBy(item => item.price, products).price));
    dispatch(changeFilter('minPrice', minBy(item => item.price, products).price));
    dispatch(changeFilter('categories', getCategory(products)));
  };
};

export const fetchProducts = dispatch => {
  fetch('https://course-api.csssr.school/products')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        dispatch(changeError(response.message));
      }
    })
    .then(data => {
      dispatch(setProduct(data.products));
      dispatch(setFilters(data.products));
      dispatch(changeLoading(false));
    })
    .catch(error => {
      dispatch(changeError(error.toString()));
    });
};
