import React from 'react';
import PropTypes from 'prop-types';

import ProductItem from 'csssr-school-product-card';

import s from './styles.module.css';

const ratingComponent = ({ isFilled }) => {
  return <div className={isFilled ? 'starFill' : ''} />;
};

export const ProductList = ({ items }) => {
  return (
    <div className={s.wrap}>
      {items.map(item => (
        <div className={s.wrapItem} key={item.id}>
          <ProductItem
            isInStock={item.isInStock}
            img={item.img}
            title={item.name}
            price={item.price}
            subPriceContent={item.subPriceContent}
            maxRating={5}
            rating={item.rating}
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
