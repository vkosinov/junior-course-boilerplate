import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import queryString from 'query-string';

import { Sidebar } from '../../containers/Sidebar';
import List from '../../containers/List';
import { Title } from '../Title';
import { Container } from '../Container';

import s from './styles.module.css';
import { setCategory, goToPage } from '../../store/actions';

export class App extends React.Component {
  componentDidMount() {
    window.addEventListener('popstate', this.setCategoryHistory);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.setCategoryHistory);
  }

  setCategoryHistory() {
    const urlParam = queryString.parse(window.location.search);

    if (store.getState().activeCategory !== urlParam.category) {
      store.dispatch(setCategory(urlParam.category));
    }

    if (urlParam.page && store.getState().activePage !== urlParam.page) {
      store.dispatch(goToPage(+urlParam.page));
    } else {
      store.dispatch(goToPage(1));
    }
  }

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
