import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    // Normally you would process payment here
    navigate('/confirmation');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <h4>Customer Info</h4>
        <input type="text" name="name" placeholder="Full Name" required value={form.name} onChange={handleChange} /><br />
        <input type="email" name="email" placeholder="Email" required value={form.email} onChange={handleChange} /><br />
        <input type="text" name="address" placeholder="Shipping Address" required value={form.address} onChange={handleChange} /><br />

        <h4>Payment Info</h4>
        <input type="text" name="cardNumber" placeholder="Card Number" required value={form.cardNumber} onChange={handleChange} /><br />
        <input type="text" name="expiry" placeholder="MM/YY" required value={form.expiry} onChange={handleChange} /><br />
        <input type="text" name="cvv" placeholder="CVV" required value={form.cvv} onChange={handleChange} /><br />

        <button type="submit" style={{ marginTop: '1rem' }}>Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
