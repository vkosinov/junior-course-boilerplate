import React from 'react';
import { connect } from 'react-redux';

import ProductList from '../components/ProductList';
import { getSelectedProduct } from './../utils';

import products from './../products';

class List extends React.Component {
  render() {
    const items = getSelectedProduct(
      products,
      this.props.minPrice,
      this.props.maxPrice,
      this.props.discount,
      this.props.activeCategory
    );
    return <ProductList items={items} />;
  }
}

const mapStateToProps = state => {
  return {
    minPrice: state.minPrice,
    maxPrice: state.maxPrice,
    discount: state.discount,
    activeCategory: state.activeCategory,
  };
};

export default connect(mapStateToProps)(List);
