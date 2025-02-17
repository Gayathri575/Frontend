import React, { useContext, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../components/Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, addToCart, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate=useNavigate();

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');

  const DELIVERY_FEE = 50;
  const VALID_PROMO_CODES = { SAVE10: 10 }; // 10% discount

  // Calculate subtotal
  const subtotal = getTotalCartAmount();

  // Apply promo code discount
  const applyPromoCode = () => {
    if (VALID_PROMO_CODES[promoCode.toUpperCase()]) {
      setDiscount((subtotal * VALID_PROMO_CODES[promoCode.toUpperCase()]) / 100);
      setPromoError('');
    } else {
      setDiscount(0);
      setPromoError('Invalid promo code ❌');
    }
  };

  // Calculate final total
  const total = subtotal - discount + (subtotal > 0 ? DELIVERY_FEE : 0);

  // Filter cart items
  const itemsInCart = food_list.filter(item => cartItems[item._id] > 0);

  return (
    <div className='cart'>
      <h2 className='cart-title'>🛒 Your Cart</h2>

      {subtotal === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty! 😔</h3>
          <p>Browse our menu and add something delicious! 🍔🍕</p>
        </div>
      ) : (
        <>
          <div className='cart-header'>
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />

          {itemsInCart.map((item) => (
            <div key={item._id} className='cart-item'>
              <img src={item.image} alt={item.name} className='cart-item-image' />
              <p className='cart-item-name'>{item.name}</p>
              <p className='cart-item-price'>₹{item.price}</p>
              
              {/* Quantity with + and - buttons outside */}
              <div className='cart-item-quantity'>
                <button className='qty-btn' onClick={() => removeFromCart(item._id)}>−</button>
                <span>{cartItems[item._id]}</span>
                <button className='qty-btn' onClick={() => addToCart(item._id)}>+</button>
              </div>

              <p className='cart-item-total'>₹{item.price * cartItems[item._id]}</p>
              <button onClick={() => removeFromCart(item._id)} className='remove-btn'>×</button>
            </div>
          ))}

          <hr />

          <div className='cart-bottom'>
            {/* Cart Totals Section */}
            <div className='cart-summary'>
              <p>Subtotal: <span>₹{subtotal.toFixed(2)}</span></p>
              <p>Delivery Fee: <span>₹{subtotal > 0 ? DELIVERY_FEE.toFixed(2) : "0.00"}</span></p>
              <p className="discount">Discount: <span>-₹{discount.toFixed(2)}</span></p>
              <hr />
              <p><strong>Total: </strong> <span>₹{total.toFixed(2)}</span></p>
              <button onClick={()=>navigate('/order')}>Proceed to Checkout</button>
            </div>

            {/* Promo Code Section */}
            <div className='promo-container'>
              <p className="promo-title">Have a Promo Code?</p>
              <div className='promo-section'>
                <input
                  type='text'
                  className='promo-input'
                  placeholder='Enter code'
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button className='apply-btn' onClick={applyPromoCode}>Apply</button>
              </div>
              {promoError && <p className='promo-error'>{promoError}</p>}
            </div>

          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
