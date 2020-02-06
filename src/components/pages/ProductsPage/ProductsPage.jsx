import React from 'react';

import { Container } from '../../Container';
import { Title } from '../../Title';
import { Sidebar } from '../../../containers/Sidebar';
import List from '../../../containers/List';

import s from './style.module.css';

export const ProductsPage = () => {
  return (
    <Container>
      <Title>Список товаров</Title>

      <div className={s.main}>
        <div className={s.aside}>
          <Sidebar />
        </div>

        <div className={s.article}>
          <List />
        </div>
      </div>
    </Container>
  );
};
