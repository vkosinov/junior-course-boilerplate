import React from 'react';

import { Title } from '../Title';
import { Container } from '../Container';
import ProductList from '../ProductList';
import Filter from '../Filter';

import { maxBy, minBy } from 'csssr-school-utils';
import { getPrice, getSelectedProduct } from '../../utils';

import s from './styles.module.css';

import products from '../../products';

export class App extends React.Component {
  constructor(props) {
    super(props);

    const priceArr = products.map(item => getPrice(item.price));

    const maxPrice = maxBy(item => item, priceArr);

    const minPrice = minBy(item => item, priceArr);

    this.state = {
      minPrice: minPrice,
      maxPrice: maxPrice,
      discount: 0,
    };
  }

  handleFilter = stateFilter => {
    this.setState(stateFilter);
  };

  render() {
    const filteredProducts = getSelectedProduct(
      products,
      this.state.minPrice,
      this.state.maxPrice,
      this.state.discount
    );

    return (
      <Container>
        <Title>Список товаров</Title>

        <div className={s.main}>
          <div className={s.aside}>
            <Filter
              maxPrice={this.state.maxPrice}
              minPrice={this.state.minPrice}
              discount={this.state.discount}
              handleFilter={this.handleFilter}
            />
          </div>

          <div className={s.article}>
            <ProductList items={filteredProducts} />
          </div>
        </div>
      </Container>
    );
  }
}
