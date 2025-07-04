import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card" style={{
      border: '1px solid #ccc',
      padding: '1rem',
      width: '250px',
      borderRadius: '8px'
    }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <Link to={`/product/${product.id}`}>View Product</Link>
    </div>
  );
};

export default ProductCard;
