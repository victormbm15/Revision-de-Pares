import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    price: 30,
    category: 'Interior',
    image: '/assets/plant1.png',
  },
  {
    id: 2,
    name: 'Areca Palm',
    price: 45,
    category: 'Exterior',
    image: '/assets/plant2.png',
  },
  {
    id: 3,
    name: 'Cactus Mix',
    price: 20,
    category: 'Interior',
    image: '/assets/plant3.png',
  },
  {
    id: 4,
    name: 'Bamboo Plant',
    price: 35,
    category: 'Exterior',
    image: '/assets/plant4.png',
  },
  {
    id: 5,
    name: 'Peace Lily',
    price: 25,
    category: 'Interior',
    image: '/assets/plant5.png',
  },
];

const ProductList = () => {
  return (
    <div style={styles.container}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px',
  },
};

export default ProductList;
