import { CHANGE_FILTER, SET_CATEGORY, CLEAR_FILTER } from './types';

export const changeFilter = (name, value) => {
  return {
    type: CHANGE_FILTER,
    payload: {
      name,
      value,
    },
  };
};

export const setCategory = activeCategory => {
  return {
    type: SET_CATEGORY,
    payload: activeCategory,
    activePage: 1,
  };
};

export const clearFilter = () => {
  return {
    type: CLEAR_FILTER,
  };
};
