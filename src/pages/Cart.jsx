import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import StepIndicator from '../components/StepIndicator';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (

    <>
    <StepIndicator />
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h2 style={{ marginBottom: '2rem' }}>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cartItems.map((item) => (
              <li
                key={item.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '1rem',
                  marginBottom: '1rem',
                  backgroundColor: '#fafafa',
                }}
              >
                <div>
                  <h4 style={{ marginBottom: '0.3rem' }}>{item.name}</h4>
                  <span style={{ color: '#555' }}>
                    ${item.price.toFixed(2)} × {item.quantity} ={' '}
                    <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    style={{
                      padding: '0.3rem 0.6rem',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                      backgroundColor: '#eee',
                      cursor: 'pointer',
                    }}
                  >
                    −
                  </button>
                  <span style={{ minWidth: '24px', textAlign: 'center' }}>{item.quantity}</span>
                  <button
                    onClick={() => incrementQuantity(item.id)}
                    style={{
                      padding: '0.3rem 0.6rem',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                      backgroundColor: '#eee',
                      cursor: 'pointer',
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      marginLeft: '1rem',
                      background: 'none',
                      border: 'none',
                      color: '#d00',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
            Total: ${total.toFixed(2)}
          </p>

          <Link to="/checkout">
            <button
              style={{
                marginTop: '1rem',
                padding: '0.6rem 1.2rem',
                border: 'none',
                backgroundColor: '#333',
                color: '#fff',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}
    </div>
    </>
  );
};

export default Cart;