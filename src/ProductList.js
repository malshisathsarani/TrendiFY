import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function ProductList({ products, addProduct, name, setName, description, setDescription, price, setPrice, imageUrl, setImageUrl, deleteProduct }) {
  const navigate = useNavigate();

  return (
    <div className="content">
      <h1>Product List</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li
            key={product.id}
            className="product-item"
          >
            <div className="product-content" onClick={() => navigate(`/product/${product.id}`)}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
              {product.imageUrl && <img src={product.imageUrl} alt={product.name} className="product-image" />}
            </div>
            <IconButton
              className="delete-icon"
              onClick={(e) => {
                e.stopPropagation(); // Prevent navigating to product details
                deleteProduct(product.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
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

export default ProductList;
