import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-page">
      <div className="product-page-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-page-info">
        <h2>{product.name}</h2>

        <p className="product-price"><strong>${product.price.toFixed(2)}</strong></p>

        <p className="product-description">
          {product.name} is designed for athletes who demand performance and comfort. Crafted with high-quality {product.material.toLowerCase()}, this item ensures breathability and durability during workouts. Perfect for training, running, or everyday wear.
        </p>

        <p className="product-meta">
          <strong>Category:</strong> {product.category} <br />
          <strong>Material:</strong> {product.material} <br />
          <strong>Gender:</strong> {product.gender}
        </p>

        <button
          className="add-to-cart-btn"
          onClick={handleAddToCart}
          disabled={added}
        >
          {added ? '✅ Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
