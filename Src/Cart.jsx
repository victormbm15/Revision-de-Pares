import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (index) => {
    dispatch(removeFromCart(index));
  };

  return (
    <div style={styles.container}>
      <h2>🛒 Tu cesta</h2>
      {cartItems.length === 0 ? (
        <p>No has añadido productos aún.</p>
      ) : (
        <ul style={styles.list}>
          {cartItems.map((item, index) => (
            <li key={index} style={styles.item}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <div style={{ flex: 1 }}>
                <strong>{item.name}</strong> - ${item.price}
              </div>
              <button style={styles.removeBtn} onClick={() => handleRemove(index)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: '20px auto',
    backgroundColor: '#f9f9f9',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  image: {
    width: '50px',
    height: '50px',
    borderRadius: '5px',
    objectFit: 'cover',
  },
  removeBtn: {
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 8px',
    cursor: 'pointer',
  },
};

export default Cart;
