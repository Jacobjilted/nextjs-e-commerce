import React, { useEffect, useState } from "react";
import styles from "./UsersGrid.module.css";
import Products from "./products";
const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;

      try {
        const response = await fetch(`${apiUrl}/api/v2/users`, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.gridContainer}>
      {data.map((user) => (
        <div key={user.id} className={styles.gridItem}>
          <img src="person.png" alt={user.name} className={styles.avatar} />
          <p className={styles.name}>{user.name}</p>
          <p className={styles.designation}>{user.designation}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
