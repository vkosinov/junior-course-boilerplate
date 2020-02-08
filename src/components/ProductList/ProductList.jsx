import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logRender from '../../hoc/logRender';
import ProductCard from 'csssr-school-product-card';
import { RatingComponent } from '../RatingComponent';

import s from './styles.module.css';

const ProductItem = logRender(ProductCard);

const ProductList = ({ items }) => {
  return (
    <div className={s.wrap}>
      {items.map(({ id, isInStock, img, name, price, subPriceContent, rating }) => (
        <Link to={`/${id}`} className={s.wrapItem} key={id}>
          <ProductItem
            isInStock={isInStock}
            img={img}
            title={name}
            price={price}
            subPriceContent={subPriceContent || ''}
            maxRating={5}
            rating={rating}
            ratingComponent={RatingComponent}
          />
        </Link>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isInStock: PropTypes.bool,
      img: PropTypes.string,
      name: PropTypes.node,
      price: PropTypes.node,
      subPriceContent: PropTypes.node,
      maxRating: PropTypes.number,
      rating: PropTypes.number,
      ratingComponent: PropTypes.func,
    })
  ),
};

ProductList.defaultProps = {
  items: [],
};

export default logRender(ProductList);
