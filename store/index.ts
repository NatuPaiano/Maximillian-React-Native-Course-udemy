import { createStore, combineReducers } from 'redux';
import mealsReducer from './reducers/meals';

const rootReducer = combineReducers({
	mealsState: mealsReducer,
});

const store = createStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof store.getState>;