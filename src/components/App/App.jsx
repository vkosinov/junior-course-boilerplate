import React from 'react';

import { Title } from '../Title';
import { Container } from '../Container';
import { ProductList } from '../ProductList';
import { Filter } from '../Filter';

import { getPrice } from '../../utils';

import s from './styles.module.css';

import products from '../../products';

const priceArr = products.map(item => getPrice(item.price));

const maxPrice = priceArr.sort((a, b) => b - a)[0];

const minPrice = priceArr.sort((a, b) => a - b)[0];

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minPrice: minPrice,
      maxPrice: maxPrice,
    };
  }

  handleFilter = stateFilter => {
    this.setState(stateFilter);
  };

  render() {
    return (
      <Container>
        <Title>Список товаров</Title>

        <div className={s.main}>
          <div className={s.aside}>
            <Filter
              maxPrice={this.state.maxPrice}
              minPrice={this.state.minPrice}
              handleFilter={this.handleFilter}
            />
          </div>

          <div className={s.article}>
            <ProductList items={products} maxPrice={this.state.maxPrice} minPrice={this.state.minPrice} />
          </div>
        </div>
      </Container>
    );
  }
}
