import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { ProductsPage } from '../../pages/ProductsPage';
import { ProductPage } from '../../pages/ProductPage';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { CartPage } from '../../pages/CartPage/CartPage';

import configureStore, { history } from '../../store';

const store = configureStore();

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" exact component={ProductsPage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/cart" component={CartPage} />
            <Route component={ErrorPage} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}
