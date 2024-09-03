"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/pages/UsersGrid.module.css"; // Adjust the path if necessary

// Define TypeScript interface for product
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

// Define TypeScript interface for error object
interface FetchError {
  message: string;
}

const Products: React.FC = () => {
  // State to hold product data
  const [data, setData] = useState<Product[]>([]);
  // State to handle loading state
  const [loading, setLoading] = useState<boolean>(true);
  // State to handle errors
  const [error, setError] = useState<FetchError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;

      try {
        const response = await fetch(`${apiUrl}/api/v2/products`, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result: Product[] = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError({ message: err.message });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.gridContainers}>
      {data.map((product) => (
        <div key={product.id} className={styles.gridItem}>
          <img
            src={`https://via.assets.so/watch.png?id=${product.image}&q=95&w=260&h=290&fit=fill`}
            alt={product.name}
            className={styles.products}
          />
          <p className={styles.name}>{product.name}</p>
          <h5 className={styles.price}>${product.price}</h5>
          <p className={styles.description}>{product.description}</p>

          <Link href={`/products/${product.id}`}>
            <button className={styles.cart}>Buy Now</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
