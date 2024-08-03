import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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

export default ProductDetail;
