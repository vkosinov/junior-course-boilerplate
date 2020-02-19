import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import s from './style.module.css';

export const Cart = ({ children, count = 0, isSuccess, error }) => {
  return (
    <div className={s.cart}>
      <div className={s.title}>
        Корзина {count}
        {isSuccess === 'OK' && <span className={s.ok} />}
      </div>
      <div className={s.wrap}>{children}</div>

      <Link to="/cart" className={s.link}>
        Перейти в корзину
      </Link>
      {error && (
        <div className={s.error}>
          <strong>Не удалось сохранить корзину:</strong> {error}
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  count: PropTypes.number,
  ok: PropTypes.string,
  error: PropTypes.string,
};
