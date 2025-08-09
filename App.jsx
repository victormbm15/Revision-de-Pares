import React from 'react';
import ProductList from './ProductList';
import Cart from './Card';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>🌱 EventPlanner - Tienda de Plantas</h1>
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
