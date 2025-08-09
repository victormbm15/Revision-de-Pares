import React from 'react';

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
        <div key={product.id} style={styles.card}>
          <img src={product.image} alt={product.name} style={styles.image} />
          <h3>{product.name}</h3>
          <p>💰 ${product.price}</p>
          <p>🌿 Categoría: {product.category}</p>
          <button style={styles.button}>Añadir a la cesta</button>
        </div>
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
  card: {
    width: '200px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  button: {
    marginTop: '10px',
    padding: '8px 12px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ProductList;
