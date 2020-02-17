import React from 'react';
import { connect } from 'react-redux';

import { Cart } from '../components/Cart';
import Button from '../components/Button';
import { clearCart, postCart } from '../store/cart/actions';

const SidebarCart = props => {
  const { items, clearCart, postCart, save, error, loading } = props;

  if (!items.length) {
    return null;
  }

  const disabled = error || loading;

  const handleClick = () => {
    postCart(items);
  };

  return (
    <Cart count={items.length} isSuccess={save} error={error}>
      <Button value="Сохранить корзину" mod="primary" onClick={handleClick} disabled={disabled} />

      <Button value="Очистить корзину" mod="primary" onClick={clearCart} disabled={disabled} />
    </Cart>
  );
};

const mapStateToProps = ({ cart }) => {
  return {
    items: cart.items,
    save: cart.save,
    error: cart.error,
    loading: cart.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearCart: () => dispatch(clearCart()),
    postCart: value => dispatch(postCart(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarCart);
