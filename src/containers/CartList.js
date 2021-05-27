import React from 'react';
import ProductList from '../components/ProductList';
import { connect } from 'react-redux';

const CartList = ({ products, cart }) => {
  const cartList = products.filter(item => cart.includes(item.id));

  return cartList.length ? <ProductList items={cartList} /> : <p>Нет товаров в корзине</p>;
};

const mapStateToProps = ({ products, cart }) => {
  return {
    products: products.items,
    cart: cart.items,
  };
};

export default connect(mapStateToProps)(CartList);
