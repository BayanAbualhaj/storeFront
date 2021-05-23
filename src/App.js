import React from 'react';
import { Provider } from 'react-redux';
import store from './store/active-categories';

import DenseAppBar from './components/header';
import Categories from './components/categories';
import Products from './components/products';
import Footer from './components/footer';

function App() {
  return (
    <Provider store={store}>
      <DenseAppBar />
      <Categories />
      <Products />
      <Footer />
    </Provider>
  );
}

export default App;
