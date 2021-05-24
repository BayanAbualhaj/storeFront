import { createStore, combineReducers } from 'redux';
import categoriesReducer from './categories-reducer';
import productsReducer from './products-reducer';
// import { composeWithDevTools } from 'redux-devtools-extension'; 
import cartReducer from './cart-reducer';




const reducers = combineReducers({ categories: categoriesReducer, products: productsReducer , cart: cartReducer });

const store = () => {
  return createStore(reducers);
};

export default store();