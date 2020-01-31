import { connect } from 'react-redux';
import Filter from '../components/Filter';
import { changeFilter, clearFilter } from '../store/actions';

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
    changeFilter: (name, value) => dispatch(changeFilter(name, value)),
    clearFilter: () => dispatch(clearFilter()),
  };
};

export const Sidebar = connect(mapStateToProps, mapDispatchToProps)(Filter);
