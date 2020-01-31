import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import queryString from 'query-string';

import logRender from '../../hoc/logRender';

import s from './styles.module.css';

const Pagination = ({ activePage, pages, handelGoToPage }) => {
  const handleClick = number => {
    if (number <= pages && number > 0) {
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

  const renderItems = () => {
    let items = [];
    for (let item = 1; item <= pages; item++) {
      items.push(
        <button
          className={cn(s.item, { [s.active]: item === activePage })}
          onClick={() => handleClick(item)}
          type="button"
          key={item}
        >
          {item}
        </button>
      );
    }
    return items;
  };

  return (
    pages !== 0 && (
      <div className={s.wrap}>
        <button type="button" className={s.edge} onClick={() => handleClick(activePage - 1)}>
          Назад
        </button>

        {renderItems()}

        <button type="button" className={s.edge} onClick={() => handleClick(activePage + 1)}>
          Вперед
        </button>
      </div>
    )
  );
};

Pagination.propTypes = {
  activePage: PropTypes.number,
  pages: PropTypes.number,
  handelGoToPage: PropTypes.func,
  handleTogglePag: PropTypes.func,
};

export default logRender(Pagination);
