import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import s from './style.module.css';

import products from '../../../products';

import { RatingComponent } from '../../RatingComponent';

export const ProductPage = props => {
  const maxRating = 5;
  const productId = +props.match.params.id;

  const product = products.find(item => item.id === productId);

  const rating = [...Array(maxRating).keys()].map(i => (
    <RatingComponent isFilled={i + 1 <= product.rating} key={i} />
  ));

  return (
    <>
      <h1 className={s.title}>
        <Link to="/" className={s.back}>
          ←
        </Link>
        {product ? product.name : 'Товар не найден'}
      </h1>
      <div className={s.wrap}>
        {product ? (
          <div className={s.product}>
            <div className={s.wrapImg}>
              <div className={cn(s.isInStock, { [s.noStok]: !product.isInStock })}>
                {product.isInStock ? 'В наличии' : 'Не доступен'}
              </div>

              <img src={product.img} alt={product.name} />
            </div>

            <div className={s.description}>
              <h2 className={s.name}>{product.name}</h2>

              <div className={s.rating}>{rating}</div>

              <p className={s.price}>{product.price}</p>
            </div>
          </div>
        ) : (
          <div className={s.notFound}>
            <img src="/assets/img/not-found.svg" alt="not-found" />
          </div>
        )}
      </div>
    </>
  );
};
