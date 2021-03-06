import { createBrowserHistory } from 'history';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';

import { filterReducer } from './filter/reducer';
import { productsReducer } from './products/reducer';
import { cartReducer } from './cart/reducer';

export const history = createBrowserHistory();

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    filter: filterReducer,
    products: productsReducer,
    cart: cartReducer,
  });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
  );

  return store;
}
