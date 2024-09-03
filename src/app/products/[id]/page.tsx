// src/pages/products/[id]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";
import styles from "@/pages/UsersGrid.module.css"; // Adjust the path if necessary

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface FetchError {
  message: string;
}

const SingleProductPage: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<FetchError | null>(null);
  const [activeTab, setActiveTab] = useState<string>("description");

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;

        try {
          const response = await fetch(`${apiUrl}/api/v2/products/${id}`, {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const result: Product = await response.json();
          setProduct(result);
        } catch (err) {
          if (err instanceof Error) {
            setError({ message: err.message });
          }
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      //router.push("/cart");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(product);
  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        {product && (
          <>
            <div className={styles.productContent}>
              <div className={styles.imageContainer}>
                <img
                  src={`https://via.assets.so/watch.png?id=${product.image}&q=95&w=600&h=600&fit=fill`}
                  alt={product.name}
                  className={styles.productImage}
                />
              </div>
              <div className={styles.textContainer}>
                <h1 className={styles.productName}>{product.name}</h1>
                <h3 className={styles.price}>${product.price}</h3>
                <p className={styles.productDescription}>
                  {product.description}
                </p>
                <p className={styles.desc}>
                  The beautiful range of Apple Naturalé that has an exciting mix
                  of natural ingredients. With the Goodness of 100% Natural
                  Ingredients.The beautiful range of Apple Naturalé that has an
                  exciting mix of natural ingredients. With the Goodness of 100%
                  Natural Ingredients.The beautiful range of Apple Naturalé that
                  has an exciting mix of natural ingredients. With the Goodness
                  of 100% Natural Ingredients.The beautiful range of Apple
                  Naturalé that has an exciting mix of natural ingredients. With
                  the Goodness of 100% Natural Ingredients.
                </p>
                <button className={styles.cart} onClick={handleAddToCart}>
                  Add To Cart
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className={styles.tabs}>
              <button
                className={
                  activeTab === "description" ? styles.activeTab : styles.tab
                }
                onClick={() => handleTabChange("description")}
              >
                Description
              </button>
              <button
                className={
                  activeTab === "reviews" ? styles.activeTab : styles.tab
                }
                onClick={() => handleTabChange("reviews")}
              >
                Reviews
              </button>
              <button
                className={
                  activeTab === "comments" ? styles.activeTab : styles.tab
                }
                onClick={() => handleTabChange("comments")}
              >
                Comments
              </button>
            </div>

            {/* Tab Content */}
            <div className={styles.tabContent}>
              {activeTab === "description" && (
                <div>
                  <h2>Description</h2>
                  <p>
                    The beautiful range of Apple Naturalé that has an exciting
                    mix of natural ingredients. With the Goodness of 100%
                    Natural Ingredients.The beautiful range of Apple Naturalé
                    that has an exciting mix of natural ingredients. With the
                    Goodness of 100% Natural Ingredients.The beautiful range of
                    Apple Naturalé that has an exciting mix of natural
                    ingredients. With the Goodness of 100% Natural
                    Ingredients.The beautiful range of Apple Naturalé that has
                    an exciting mix of natural ingredients. With the Goodness of
                    100% Natural Ingredients.
                  </p>
                </div>
              )}
              {activeTab === "reviews" && (
                <div>
                  <h2>Reviews</h2>
                  <p>No reviews yet.</p>
                </div>
              )}
              {activeTab === "comments" && (
                <div className={styles.formContainer}>
                  <h2>Leave a Comment</h2>
                  <form>
                    <textarea
                      placeholder="Write your comment here..."
                      rows={4}
                    />
                    <button type="submit">Submit</button>
                  </form>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleProductPage;
