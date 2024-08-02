import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useNavigate, useParams } from 'react-router-dom';
import LandingPage from './LandingPage';
import './App.css';

// Dummy product data
const initialProducts = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', price: '$10', imageUrl: 'assets/img2.jpg' },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', price: '$20', imageUrl: 'assets/img2.jpg' },
  { id: 3, name: 'Product 3', description: 'Description of Product 3', price: '$10', imageUrl: 'assets/img3.jpg' },
  { id: 4, name: 'Product 4', description: 'Description of Product 4', price: '$20', imageUrl: 'assets/img2.jpg' },
  { id: 5, name: 'Product 5', description: 'Description of Product 5', price: '$10', imageUrl: 'assets/img3.jpg' },
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

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductList products={products} addProduct={addProduct} name={name} setName={setName} description={description} setDescription={setDescription} price={price} setPrice={setPrice} imageUrl={imageUrl} setImageUrl={setImageUrl} />} />
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
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

function ProductList({ products, addProduct, name, setName, description, setDescription, price, setPrice, imageUrl, setImageUrl }) {
  const navigate = useNavigate();

  return (
    <div className="content">
      <h1>Product List</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li
            key={product.id}
            className="product-item"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            {product.imageUrl && <img src={product.imageUrl} alt={product.name} className="product-image" />}
          </li>
        ))}
      </ul>
      <div className="form-section">
        <h2>Add a New Product</h2>
        <form onSubmit={addProduct} className="product-form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
          />
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            required
          />
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL"
          />
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
}

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      {product.imageUrl && <img src={product.imageUrl} alt={product.name} className="product-image" />}
    </div>
  );
}

export default App;
