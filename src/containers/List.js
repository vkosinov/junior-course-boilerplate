import React from 'react';
import { connect } from 'react-redux';

import ProductList from '../components/ProductList';
import { Pagination } from '../components/Pagination';
import { goToPage } from '../store/pagination/actions';
import { getFilteredProduct } from '../store/filter/selectors';

import products from './../products';

class List extends React.Component {
  render() {
    const { items, activePage, goToPage } = this.props;
    return (
      <>
        {items.length && activePage <= items.length ? (
          <>
            <ProductList items={items[activePage - 1]} />

            <Pagination pages={items} activePage={activePage} handelGoToPage={goToPage} />
          </>
        ) : (
          <p>Ничего не найдено</p>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ filter, pagination }) => {
  return {
    items: getFilteredProduct({
      products,
      ...filter,
    }),
    activePage: pagination.activePage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goToPage: number => dispatch(goToPage(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
