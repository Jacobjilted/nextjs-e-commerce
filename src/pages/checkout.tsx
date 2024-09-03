import React, { useEffect, useState } from "react";
import { useCart } from "@/contexts/CartContext";
import styles from "@/pages/Checkout.module.css";

const CheckoutPage: React.FC = () => {
  const { cart } = useCart();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    document.body.style.margin = "0";
  }, []);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  // Calculate the total price of all items in the cart
  const getTotalPrice = () => {
    return cart
      .reduce(
        (total, item) => total + parseFloat(item.price) * (item.quantity || 1),
        0
      )
      .toFixed(2);
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Checkout</h1>
        <form onSubmit={handleFormSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address2">Other Address:</label>
            <input type="text" id="address2" name="address2" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="zip">Zip Code:</label>
            <input type="text" id="zip" name="zip" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number:</label>
            <input type="number" id="phone" name="phone" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="summary">Other Notes:</label>
            <textarea cols={80} rows={5}></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit Order
          </button>
        </form>
      </div>
      <div className={styles.cartItemsContainer}>
        <h2>Cart Items:</h2>
        <div className={styles.cartItems}>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img
                  src={`https://via.assets.so/watch.png?id=${item.id}&q=95&w=100&h=100&fit=fill`}
                  alt={item.name}
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <p>{item.description}</p>
                  <p className={styles.qtycheckout}>
                    Quantity: {item.quantity}
                  </p>{" "}
                  {/* Display the quantity here */}
                </div>
              </li>
            ))}
          </ul>
          <p className={styles.totalPrice}>Total Price: ${getTotalPrice()}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
