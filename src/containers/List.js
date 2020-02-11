import React from 'react';
import { connect } from 'react-redux';

import ProductList from '../components/ProductList';
import { Pagination } from '../components/Pagination';
import { getFilteredProduct, getActiveCategory, getActivePage } from '../store/filter/selectors';

class List extends React.Component {
  render() {
    const { items, activePage, activeCategory } = this.props;
    const active = +activePage || 1;

    return (
      <>
        {items.length ? (
          <>
            <ProductList items={items[active - 1]} />

            <Pagination pages={items} activePage={active} activeCategory={activeCategory} />
          </>
        ) : (
          <p>Ничего не найдено</p>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: getFilteredProduct({
      ...state,
    }),
    activePage: getActivePage(state),
    activeCategory: getActiveCategory(state),
  };
};

export default connect(mapStateToProps)(List);
