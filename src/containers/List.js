import React from 'react';
import { connect } from 'react-redux';

import ProductList from '../components/ProductList';
import { Pagination } from '../components/Pagination';
import { getFilteredProduct } from '../store/filter/selectors';

import products from './../products';

class List extends React.Component {
  render() {
    const { items, activePage, goToPage } = this.props;
    const active = activePage || 1;
    return (
      <>
        {items.length ? (
          <>
            <ProductList items={items[active - 1]} />

            <Pagination pages={items} activePage={activePage} handelGoToPage={goToPage} />
          </>
        ) : (
          <p>Ничего не найдено</p>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ filter, router }) => {
  return {
    items: getFilteredProduct({
      products,
      activeCategory: router.location.query.category,
      ...filter,
    }),
    activePage: +router.location.query.page,
  };
};

export default connect(mapStateToProps)(List);
