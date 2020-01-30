import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';

import { Sidebar } from '../../containers/Sidebar';
import List from '../../containers/List';
import { Title } from '../Title';
import { Container } from '../Container';

import s from './styles.module.css';

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}
