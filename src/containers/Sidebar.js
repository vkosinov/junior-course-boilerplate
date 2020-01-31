import { connect } from 'react-redux';
import Filter from '../components/Filter';

const mapStateToProps = state => {
  return {
    minPrice: state.minPrice,
    maxPrice: state.maxPrice,
    discount: state.discount,
    activeCategory: state.activeCategory,
    categories: state.categories,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeFilter: (name, value) => dispatch({ type: 'CHANGE_FILTER', payload: { name: name, value: value } }),
    clearFilter: () => dispatch({ type: 'CLEAR_FILTER' }),
  };
};

export const Sidebar = connect(mapStateToProps, mapDispatchToProps)(Filter);
