import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';

import s from './style.module.css';

export const Cart = ({ count = 0, ok }) => {
  return (
    <div className={s.cart}>
      <div className={s.title}>
        <img className={s.icon} src="/assets/img/basket.svg" alt="cart" />
        Корзина {count}
        {ok && <img className={s.ok} src="/assets/img/ok.svg" alt="ok" />}
      </div>
      <Button value="Сохранить корзину" mod="primary" />
    </div>
  );
};

Cart.propTypes = {
  count: PropTypes.number,
  ok: PropTypes.bool,
};
