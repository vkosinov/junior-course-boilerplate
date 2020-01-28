import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import logRender from '../../hoc/logRender';

import s from './styles.module.css';

const CategoryItem = ({ name, active, onClick }) => {
  const handelClick = () => {
    onClick('activeCategory', name);
    window.history.pushState({}, '', name);
  };
  return (
    <button onClick={handelClick} className={cn(s.item, { [s.active]: name === active })} type="button">
      {name}
    </button>
  );
};

CategoryItem.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.string,
};

export default logRender(CategoryItem);
