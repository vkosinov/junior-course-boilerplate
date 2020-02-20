import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../../components/Container';
import SidebarCart from '../../containers/SidebarCart';
import { Title } from '../../components/Title';
import CartList from '../../containers/CartList';

import s from './styles.module.css';

export const CartPage = () => (
  <Container>
    <Title>
      <Link to="/" className={s.back}>
        ←
      </Link>
      Корзина
    </Title>

    <main className={s.cart}>
      <article className={s.list}>
        <CartList />
      </article>

      <aside className={s.aside}>
        <SidebarCart />
      </aside>
    </main>
  </Container>
);
