import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../store/products/actions';

import { ProductItem } from '../components/ProductItem';
import { NotFound } from '../components/NotFound';

class Product extends React.Component {
  componentDidMount() {
    this.props.handleFetch();
  }

  render() {
    const { items, productId, loading, error } = this.props;
    const id = productId - 1;

    return (
      <>
        {loading && !error && <p>Загрузка</p>}

        {loading && error && <NotFound title={`Произошла ошибка ${error}`} arrow />}

        {!loading && !error && items[id] && <ProductItem item={items[id]} />}

        {!loading && !error && !items[id] && <NotFound title="Товар не найден" arrow />}
      </>
    );
  }
}

const mapStateToProps = props => {
  return {
    loading: props.products.loading,
    error: props.products.error,
    items: props.products.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFetch: () => dispatch(fetchProducts),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
