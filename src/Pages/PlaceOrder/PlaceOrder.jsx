import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../components/Context/StoreContext';

const PlaceOrder = () => {
  const store = useContext(StoreContext);
  if (!store) {
    console.error("StoreContext is not available");
    return <p>Error: StoreContext is missing!</p>;
  }
  const { getTotalCartAmount } = store;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
  };

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-field">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>

        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Street" required />

        <div className="multi-field">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
        </div>

        <div className="multi-field">
          <input type="text" placeholder="Zip Code" required />
          <input type="text" placeholder="Country" required />
        </div>

        <input type="text" placeholder="Phone Number" required />

        <button type="submit" className="submit-btn">Place Order</button>
      </div>
    </form>
  );
};

export default PlaceOrder;
