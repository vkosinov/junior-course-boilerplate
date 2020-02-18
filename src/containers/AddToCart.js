import React from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button';
import { toggleToCart } from '../store/cart/actions';

const AddToCart = ({ id, items, toggleToCart, error, loading }) => {
  const added = items.find(item => item === id);

  const handleClick = () => {
    if (added) {
      toggleToCart(items.filter(item => item !== id));
    } else {
      toggleToCart([...items, id]);
    }
  };

  const value = added ? 'Убрать' : 'Добавить';
  const mod = added ? null : 'primary';
  const disabled = error || loading;

  return <Button value={value} mod={mod} onClick={handleClick} disabled={disabled} />;
};

const mapStateToprops = ({ cart }) => {
  return {
    items: cart.items,
    error: cart.error,
    loading: cart.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleToCart: value => dispatch(toggleToCart(value)),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(AddToCart);
