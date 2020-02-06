import { connect } from 'react-redux';
import Filter from '../components/Filter';
import { changeFilter } from '../store/filter/actions';
import { push } from 'connected-react-router';

const mapStateToProps = ({ filter, router }) => {
  return {
    minPrice: filter.minPrice,
    maxPrice: filter.maxPrice,
    discount: filter.discount,
    activeCategory: router.location.query.category,
    categories: filter.categories,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeFilter: (name, value) => dispatch(changeFilter(name, value)),
    changeCategory: value => dispatch(push(value)),
  };
};

export const Sidebar = connect(mapStateToProps, mapDispatchToProps)(Filter);
