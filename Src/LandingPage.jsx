import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Puedes crear estilos aparte si quieres

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="overlay">
        <h1 className="company-name">EventPlanner Plants</h1>
        <p className="description">
          Bienvenido a EventPlanner Plants, tu tienda virtual de plantas decorativas para eventos inolvidables. 🌿
        </p>
        <button className="start-button" onClick={() => navigate('/products')}>
          Comenzar
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
