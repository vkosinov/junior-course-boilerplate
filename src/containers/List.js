import { connect } from 'react-redux';
import ProductList from '../components/ProductList';

const mapStateToProps = state => {
  return {
    minPrice: state.minPrice,
    maxPrice: state.maxPrice,
    discount: state.discount,
    activeCategory: state.activeCategory,
  };
};

export const List = connect(mapStateToProps)(ProductList);
