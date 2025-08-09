import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>💰 ${product.price}</p>
      <p>🌿 Categoría: {product.category}</p>
      <button style={styles.button} onClick={handleAddToCart}>
        Añadir a la cesta
      </button>
    </div>
  );
};

// ... estilos igual que antes

export default ProductCard;
