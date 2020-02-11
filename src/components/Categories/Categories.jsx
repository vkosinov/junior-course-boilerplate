import React from 'react';
import PropTypes from 'prop-types';

import CategoryItem from '../CategoryItem';
import logRender from '../../hoc/logRender';

import s from './style.module.css';

const Categories = ({ title, categories, activeCategory, changeCategory }) => {
  return (
    <div className={s.wrap}>
      <h3 className={s.title}>{title}</h3>
      <div className={s.items}>
        {categories.map((item, index) => (
          <CategoryItem key={index} name={item} active={activeCategory} onClick={changeCategory} />
        ))}
      </div>
    </div>
  );
};

Categories.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      onClick: PropTypes.func,
      active: PropTypes.string,
    })
  ),
};

Categories.defaultProps = {
  title: 'Категории',
  items: [],
};

export default logRender(Categories);
