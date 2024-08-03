import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProductList from './ProductList';
import ProductDetail from './ProductDetailPage';
import './App.css';

// Dummy product data
const initialProducts = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', price: '$10', imageUrl: '/assets/img2.jpg' },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', price: '$20', imageUrl: '/assets/img2.jpg' },
  { id: 3, name: 'Product 3', description: 'Description of Product 3', price: '$10', imageUrl: '/assets/img3.jpg' },
  { id: 4, name: 'Product 4', description: 'Description of Product 4', price: '$20', imageUrl: '/assets/img2.jpg' },
  { id: 5, name: 'Product 5', description: 'Description of Product 5', price: '$10', imageUrl: '/assets/img3.jpg' },
  // Add more products as needed
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const addProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: products.length + 1,
      name,
      description,
      price,
      imageUrl, // Ensure this path is correct
    };
    setProducts([...products, newProduct]);
    setName('');
    setDescription('');
    setPrice('');
    setImageUrl('');
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductList products={products} addProduct={addProduct} name={name} setName={setName} description={description} setDescription={setDescription} price={price} setPrice={setPrice} imageUrl={imageUrl} setImageUrl={setImageUrl} deleteProduct={deleteProduct} />} />
          <Route path="/product/:id" element={<ProductDetail products={products} deleteProduct={deleteProduct} />} />
        </Routes>
      </div>
    </Router>
  );
}

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Trendify</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default App;
