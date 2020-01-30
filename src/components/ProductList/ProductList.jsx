import React from 'react';
import PropTypes from 'prop-types';

import logRender from '../../hoc/logRender';
import ProductCard from 'csssr-school-product-card';

import s from './styles.module.css';

const ratingComponent = ({ isFilled }) => {
  return <div className={isFilled ? 'starFill' : ''} />;
};

const ProductItem = logRender(ProductCard);

const ProductList = ({ items }) => {
  return (
    <div className={s.wrap}>
      {items.map(({ id, isInStock, img, name, price, subPriceContent, rating }) => (
        <div className={s.wrapItem} key={id}>
          <ProductItem
            isInStock={isInStock}
            img={img}
            title={name}
            price={price}
            subPriceContent={subPriceContent || ''}
            maxRating={5}
            rating={rating}
            ratingComponent={ratingComponent}
          />
        </div>
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
