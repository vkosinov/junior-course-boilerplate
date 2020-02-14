import React from 'react';
import { connect } from 'react-redux';
import Filter from '../components/Filter';
import { changeFilter } from '../store/filter/actions';
import { push } from 'connected-react-router';
import { getActiveCategory } from '../store/products/selectors';

const Sidebar = ({
  changeFilter,
  changeCategory,
  discount,
  maxPrice,
  minPrice,
  categories,
  activeCategory,
  loading,
  error,
}) => {
  return (
    !loading &&
    !error && (
      <Filter
        categories={categories}
        activeCategory={activeCategory}
        discount={discount}
        changeFilter={changeFilter}
        changeCategor={changeCategory}
        maxPrice={maxPrice}
        minPrice={minPrice}
      />
    )
  );
};

const mapStateToProps = state => {
  return {
    loading: state.products.loading,
    error: state.products.error,
    minPrice: state.filter.minPrice,
    maxPrice: state.filter.maxPrice,
    discount: state.filter.discount,
    categories: state.filter.categories,
    activeCategory: getActiveCategory(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeFilter: (name, value) => dispatch(changeFilter(name, value)),
    changeCategory: value => dispatch(push(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
