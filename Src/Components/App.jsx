import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductList from './Components/ProductList';
import Cart from './Cart';

const App = () => {
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>🌱 EventPlanner - Tienda de Plantas</h1>
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
