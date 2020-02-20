import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import s from './style.module.css';

export const Cart = ({ children, total, count = 0, isSuccess, error, isCartPage }) => {
  return (
    <div className={s.cart}>
      <div className={s.title}>
        Корзина
        {isSuccess === 'OK' && <span className={s.ok} />}
      </div>

      <div className={s.item}>
        Товаров <span className={s.quantity}>{count}</span>
      </div>

      <div className={s.item}>
        Всего <span className={s.total}>{total}</span>
      </div>

      <div className={s.wrap}>{children}</div>

      {!isCartPage && (
        <Link to="/cart" className={s.link}>
          Перейти в корзину
        </Link>
      )}

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
  total: PropTypes.string,
  isCartPage: PropTypes.bool,
};
