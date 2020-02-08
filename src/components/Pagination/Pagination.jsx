import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import logRender from '../../hoc/logRender';

import s from './styles.module.css';

const Pagination = ({ activePage, pages, activeCategory }) => {
  const active = activePage || 1;

  const getPath = pageNumber => {
    let url = '';

    if (activeCategory) {
      url = `&category=${activeCategory}`;
    }

    return `page=${pageNumber}${url}`;
  };

  return (
    pages.length !== 0 && (
      <div className={s.wrap}>
        {active !== 1 && (
          <Link className={s.edge} to={{ search: getPath(active - 1) }}>
            Назад
          </Link>
        )}

        {pages.map((item, index) => (
          <Link
            to={{ search: getPath(index + 1) }}
            className={cn(s.item, { [s.active]: index + 1 === active })}
            key={index}
          >
            {index + 1}
          </Link>
        ))}

        {active !== pages.length && (
          <Link className={s.edge} to={{ search: getPath(active + 1) }}>
            Вперед
          </Link>
        )}
      </div>
    )
  );
};

Pagination.propTypes = {
  activePage: PropTypes.number,
  pages: PropTypes.array,
  handelGoToPage: PropTypes.func,
  handleTogglePag: PropTypes.func,
};

Pagination.defaulProps = {
  pages: [],
};

export default logRender(Pagination);
