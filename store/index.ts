import { combineReducers, createStore } from 'redux';
import productsReducer from './reducers/products';

const rootReducer = combineReducers({
  productsState: productsReducer,
});

const store = createStore(rootReducer);

export default store;

// extract the return type of the root reducer (using redux with typescript)
export type Rootstate = ReturnType<typeof rootReducer>;
