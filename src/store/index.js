import { createStore, combineReducers } from 'redux';
import { filterReducer } from './filter/reducer';
import { paginationReducer } from './pagination/reducer';

const rootReducer = combineReducers({
  filter: filterReducer,
  pagination: paginationReducer,
});

export const store = createStore(rootReducer);
