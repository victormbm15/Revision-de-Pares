import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { restoreCart } from './Redux/CartSlice';

// Restaurar carrito desde localStorage
const savedCart = localStorage.getItem('cart');
if (savedCart) {
  try {
    const parsedCart = JSON.parse(savedCart);
    store.dispatch(restoreCart(parsedCart));
  } catch (error) {
    console.error('Error al restaurar el carrito:', error);
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
