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
    setTimeout(() => setAdded(false), 2000); // Reset after 2s
  };

  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: '300px', height: 'auto' }} />
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      <p><strong>Material:</strong> {product.material}</p>
      <p><strong>Category:</strong> {product.category}</p>

      <button
        onClick={handleAddToCart}
        disabled={added}
        style={{
          marginTop: '1rem',
          backgroundColor: added ? '#10B981' : '#222',
          color: 'white',
          padding: '0.6rem 1.2rem',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        {added ? '✅ Added!' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductPage;
