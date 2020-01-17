import React from 'react';
import PropTypes from 'prop-types';

import ProductItem from 'csssr-school-product-card';
import { LogRender } from '../LogRender';

import { getPrice } from '../../utils';

import s from './styles.module.css';

const ratingComponent = ({ isFilled }) => {
  return <div className={isFilled ? 'starFill' : ''} />;
};

const getSelectedProduct = (items, maxPrice, minPrice) => {
  return items.filter(item => getPrice(item.price) <= minPrice && getPrice(item.price) >= maxPrice);
};

export class ProductList extends LogRender {
  render() {
    if (this.props.maxPrice >= 0 && this.props.minPrice >= 0) {
      this.products = getSelectedProduct(this.props.items, this.props.minPrice, this.props.maxPrice);
    } else {
      this.products = this.props.items;
    }

    return (
      <div className={s.wrap}>
        {this.products.map(item => (
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
  }
}

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
