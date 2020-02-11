import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';

import logRender from '../../hoc/logRender';

import s from './styles.module.css';

const CategoryItem = ({ name, active }) => {
  return (
    <Link to={{ search: `category=${name}` }} className={cn(s.item, { [s.active]: name === active })}>
      {name}
    </Link>
  );
};

CategoryItem.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.string,
};

export default logRender(CategoryItem);
