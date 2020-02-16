import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import s from './style.module.css';

export const Cart = ({ children, count = 0, ok, error }) => {
  return (
    <div className={s.cart}>
      <div className={s.title}>
        <img className={s.icon} src="/assets/img/basket.svg" alt="cart" />
        Корзина {count}
        {ok === 'OK' && <img className={s.ok} src="/assets/img/ok.svg" alt="ok" />}
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
