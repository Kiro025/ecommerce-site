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
    navigate('/confirmation');
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="checkout-section-title">Customer Info</div>
        <div className="checkout-row">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          required
          value={form.address}
          onChange={handleChange}
        />

        <div className="checkout-section-title">Payment Info</div>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          required
          value={form.cardNumber}
          onChange={handleChange}
        />
        <div className="checkout-row">
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            required
            value={form.expiry}
            onChange={handleChange}
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            required
            value={form.cvv}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="checkout-btn">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;