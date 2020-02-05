import { connect } from 'react-redux';
import Filter from '../components/Filter';
import { changeFilter, clearFilter } from '../store/filter/actions';
import {} from '../store/pagination/actions';

const mapStateToProps = ({ filter }) => {
  return {
    minPrice: filter.minPrice,
    maxPrice: filter.maxPrice,
    discount: filter.discount,
    activeCategory: filter.activeCategory,
    categories: filter.categories,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeFilter: (name, value) => dispatch(changeFilter(name, value)),
    clearFilter: () => dispatch(clearFilter()),
  };
};

export const Sidebar = connect(mapStateToProps, mapDispatchToProps)(Filter);
