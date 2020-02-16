import React from 'react';
import { connect } from 'react-redux';

import ProductList from '../components/ProductList';
import { Pagination } from '../components/Pagination';
import { NotFound } from '../components/NotFound';
import { Title } from '../components/Title';
import { getFilteredProduct, getActiveCategory } from '../store/products/selectors';
import { getActivePage } from '../store/filter/selectors';
import { fetchProducts } from '../store/products/actions';

class List extends React.Component {
  componentDidMount() {
    this.props.handleFetch();
  }

  render() {
    const { items, activePage, activeCategory, loading, error } = this.props;
    const active = +activePage || 1;

    return (
      <>
        {loading && !error && (
          <>
            <Title>Список товаров</Title>
            <img src="/assets/img/loading.svg" alt="loading" />
          </>
        )}

        {!loading && !error && items.length > 0 && (
          <>
            <Title>Список товаров</Title>
            <ProductList items={items[active - 1]} />

            <Pagination pages={items} activePage={active} activeCategory={activeCategory} />
          </>
        )}

        {!loading && !error && items.length === 0 && <NotFound title="Товар не найден" />}

        {loading && error && <NotFound title={`Произошла ошибка ${error}`} />}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: getFilteredProduct({
      ...state,
    }),
    loading: state.products.loading,
    error: state.products.error,
    activePage: getActivePage(state),
    activeCategory: getActiveCategory(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFetch: () => dispatch(fetchProducts),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
