import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';

function App() {
  const cart = useSelector((state) => state.cart);

  // Guardar el carrito en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>🛒 Revisión de Pares</h1>
        <p>Tu carrito se guarda automáticamente</p>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h2>Productos</h2>
          <ProductList />
        </section>

        <aside style={styles.section}>
          <h2>Carrito</h2>
          <Cart />
        </aside>
      </main>

      <footer style={styles.footer}>
        <p>Desarrollado por Victor ✨</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '1rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  main: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'space-between',
  },
  section: {
    flex: 1,
    background: '#f9f9f9',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  footer: {
    textAlign: 'center',
    marginTop: '2rem',
    fontSize: '0.9rem',
    color: '#666',
  },
};

export default App;
