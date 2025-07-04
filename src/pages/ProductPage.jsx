import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: '300px', height: 'auto' }} />
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      <p><strong>Material:</strong> {product.material}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <button onClick={() => addToCart(product)} style={{ marginTop: '1rem' }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
