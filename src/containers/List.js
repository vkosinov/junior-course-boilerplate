import React from 'react';
import { connect } from 'react-redux';

import ProductList from '../components/ProductList';
import { Pagination } from '../components/Pagination';
import { goToPage } from '../store/actions';
import { getPagination } from '../store/selectors';

import products from './../products';

class List extends React.Component {
  render() {
    const { minPrice, maxPrice, discount, activeCategory, activePage } = this.props;
    const items = getPagination({ products, minPrice, maxPrice, discount, activeCategory, numberPage: 3 });

    return (
      <>
        <ProductList items={items[activePage - 1]} />
        <Pagination pages={items.length} activePage={activePage} handelGoToPage={this.props.goToPage} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goToPage: number => dispatch(goToPage(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
