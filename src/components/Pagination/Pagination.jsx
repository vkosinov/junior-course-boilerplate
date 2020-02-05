import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import queryString from 'query-string';

import logRender from '../../hoc/logRender';

import s from './styles.module.css';

const Pagination = ({ activePage, pages, handelGoToPage }) => {
  const handleClick = number => {
    if (number <= pages.length && number > 0) {
      handelGoToPage(number);

      if (window.location.search) {
        const urlParam = queryString.parse(window.location.search);
        const rezult = { ...urlParam, page: number };

        window.history.pushState({}, '', `?${queryString.stringify(rezult)}`);
      } else {
        window.history.pushState({}, '', `?page=${number}`);
      }
    }
  };

  return (
    pages.length !== 0 && (
      <div className={s.wrap}>
        <button type="button" className={s.edge} onClick={() => handleClick(activePage - 1)}>
          Назад
        </button>

        {pages.map((item, index) => (
          <button
            className={cn(s.item, { [s.active]: index + 1 === activePage })}
            onClick={() => handleClick(index + 1)}
            type="button"
            key={index}
          >
            {index + 1}
          </button>
        ))}

        <button type="button" className={s.edge} onClick={() => handleClick(activePage + 1)}>
          Вперед
        </button>
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
  pages: [1, 2, 3],
};

export default logRender(Pagination);
