import React from 'react';
import PropTypes from 'prop-types';

import logRender from '../../hoc/logRender';
import ProductCard from 'csssr-school-product-card';

import { getSelectedProduct } from '../../utils';

import s from './styles.module.css';

const ratingComponent = ({ isFilled }) => {
  return <div className={isFilled ? 'starFill' : ''} />;
};

const ProductItem = logRender(ProductCard);

class ProductList extends React.Component {
  render() {
    if (this.props.maxPrice >= 0 && this.props.minPrice >= 0) {
      this.products = getSelectedProduct(
        this.props.items,
        this.props.minPrice,
        this.props.maxPrice,
        this.props.discount
      );
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
              subPriceContent={item.subPriceContent || ''}
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

export default logRender(ProductList);
