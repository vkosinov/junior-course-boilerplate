import { TOGGLE_TO_CART, CLEAR_CART, SAVE_CART, LOADING_CART, ERROR_CART } from './types';

export const toggleToCart = value => {
  return {
    type: TOGGLE_TO_CART,
    payload: value,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const loadingCart = value => {
  return {
    type: LOADING_CART,
    payload: value,
  };
};

export const saveCart = value => {
  return {
    type: SAVE_CART,
    payload: value,
  };
};

export const errorCart = value => {
  return {
    type: ERROR_CART,
    payload: value,
  };
};

export const postCart = items => {
  return dispatch => {
    dispatch(loadingCart(true));
    fetch('https://course-api.csssr.school/save', {
      method: 'POST',
      body: JSON.stringify(items),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        dispatch(saveCart(data.result));
        dispatch(loadingCart(false));
      })
      .catch(error => {
        dispatch(errorCart(error.toString()));
      });
  };
};
