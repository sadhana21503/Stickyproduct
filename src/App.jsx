// src/App.jsx
import React from 'react';
import ProductContainer from './components/ProductContainer';
import productData from './components/productData';
import './app.css';

function App() {
  return (
    <div className="App">
      {productData.map((data, index) => (
        <div key={index} className="mb-8">
          <ProductContainer {...data} />
        </div>
      ))}
    </div>
  );
}

export default App;
