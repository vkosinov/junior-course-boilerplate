import React from 'react';
import PropTypes from 'prop-types';

import { ProductItem } from '../ProductItem';

import { Wrap } from './styled';

const ratingComponent = ({ isFilled }) => {
  return <div className={isFilled ? 'starFill' : ''} />;
};

const ProductList = ({ items }) => {
  return (
    <Wrap>
      {items.map(item => (
        <ProductItem
          key={item.id}
          isInStock={item.isInStock}
          img={item.img}
          title={item.name}
          price={item.price}
          maxRating={5}
          rating={item.rating}
          ratingComponent={ratingComponent}
        />
      ))}
    </Wrap>
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

export { ProductList };
