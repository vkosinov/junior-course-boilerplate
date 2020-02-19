import React from 'react';

import { Container } from '../../components/Container';
import List from '../../containers/List';
import Sidebar from '../../containers/Sidebar';
import SidebarCart from '../../containers/SidebarCart';

import s from './style.module.css';

export const ProductsPage = () => {
  return (
    <Container>
      <main className={s.main}>
        <aside className={s.aside}>
          <Sidebar />
        </aside>

        <article className={s.article}>
          <List />
        </article>

        <aside className={s.aside}>
          <SidebarCart />
        </aside>
      </main>
    </Container>
  );
};
