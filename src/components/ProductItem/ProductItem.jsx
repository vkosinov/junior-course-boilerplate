import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { formatMoney } from 'csssr-school-utils';

import { RatingComponent } from '../RatingComponent';
import AddToCart from '../../containers/AddToCart';

import s from './style.module.css';

export const ProductItem = ({ item }) => {
  const maxRating = 5;
  const { name, isInStock, img, stars, price, id } = item;

  const rating = [...Array(maxRating).keys()].map(i => <RatingComponent isFilled={i + 1 <= stars} key={i} />);

  return (
    <>
      <h1 className={s.title}>
        <Link to="/" className={s.back}>
          ←
        </Link>
        {name}
      </h1>
      <div className={s.wrap}>
        <div className={s.item}>
          <div className={s.wrapImg}>
            <div className={cn(s.isInStock, { [s.noStok]: !isInStock })}>
              {isInStock ? 'В наличии' : 'Не доступен'}
            </div>

            <img src={`/assets/img/products${img}`} alt={name} />
          </div>

          <div className={s.description}>
            <h2 className={s.name}>{name}</h2>

            <div className={s.rating}>{rating}</div>

            <p className={s.price}>{`${formatMoney(price, 0, '', ' ')} ₽`}</p>

            <AddToCart id={id} long />
          </div>
        </div>
      </div>
    </>
  );
};
