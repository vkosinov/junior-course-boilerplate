import { CHANGE_FILTER, SET_CATEGORY, CLEAR_FILTER, GO_TO_PAGE } from './actionTypes';

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
  };
};

export const clearFilter = () => {
  return {
    type: CLEAR_FILTER,
  };
};

export const goToPage = number => {
  return {
    type: GO_TO_PAGE,
    payload: number,
  };
};
