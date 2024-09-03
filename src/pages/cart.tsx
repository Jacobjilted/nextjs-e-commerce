// src/pages/CartPage.tsx

import React, { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import styles from "@/pages/Cart.module.css";
import { useRouter } from "next/router";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    document.body.style.margin = "0";
  }, []);

  const handleCheckout = () => {
    router.push("/checkout");
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity <= 0) quantity = 1; // Ensure minimum quantity is 1
    updateQuantity(id, quantity);
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + (item.quantity || 0), 0);
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cart.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <img
                  src={`https://via.assets.so/watch.png?id=${item.id}&q=95&w=100&h=100&fit=fill`}
                  alt={item.name}
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <p>{item.description}</p>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, Number(e.target.value))
                    }
                  />
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p>Total Quantity: {getTotalQuantity()}</p>
          <button className={styles.checkoutButton} onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
