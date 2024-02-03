import { createStore, combineReducers } from 'redux';
import favoritesReducer from './Reducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});
const store = createStore(rootReducer);
export default store;
