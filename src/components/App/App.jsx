import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { ProductsPage } from '../pages/ProductsPage';
import { ProductPage } from '../pages/ProductPage';

import configureStore, { history } from '../../store';

const store = configureStore();

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Provider store={store}>
            <Switch>
              <Route path="/" exact component={ProductsPage} />

              <Route path="/:id" component={ProductPage} />
            </Switch>
          </Provider>
        </ConnectedRouter>
      </Provider>
    );
  }
}
