import React from 'react';

import { Title } from '../Title';
import { Container } from '../Container';
import { ProductList } from '../ProductList';

import products from '../../products';

const App = () => {
  return (
    <Container>
      <Title>Список товаров</Title>

      <ProductList items={products} />
    </Container>
  );
};

export { App };
