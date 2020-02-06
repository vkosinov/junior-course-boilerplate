import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import logRender from '../../hoc/logRender';

import s from './styles.module.css';

const Pagination = ({ activePage, pages }) => {
  const active = activePage || 1;
  return (
    pages.length !== 0 && (
      <div className={s.wrap}>
        {active !== 1 && (
          <Link className={s.edge} to={{ search: `page=${active - 1}` }}>
            Назад
          </Link>
        )}

        {pages.map((item, index) => (
          <Link
            to={{ search: `page=${index + 1}` }}
            className={cn(s.item, { [s.active]: index + 1 === active })}
            key={index}
          >
            {index + 1}
          </Link>
        ))}

        {active !== pages.length && (
          <Link className={s.edge} to={{ search: `page=${active + 1}` }}>
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
