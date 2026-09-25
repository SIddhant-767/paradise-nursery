import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalCost = (item) => (item.price * item.quantity).toFixed(2);

  const calculateTotalAmount = () =>
    cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleDelete = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert('Checkout functionality is coming soon!');
  };

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      <h3 className="cart-total-amount">Total: ${calculateTotalAmount()}</h3>

      {cartItems.length === 0 && <p className="empty-cart">Your cart is empty.</p>}

      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.name} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-thumb" />
            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p>Unit Price: ${item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>
              <p className="item-subtotal">Subtotal: ${calculateTotalCost(item)}</p>
              <button className="delete-button" onClick={() => handleDelete(item)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-actions">
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
        <button className="continue-button" onClick={onContinueShopping}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default CartItem;
