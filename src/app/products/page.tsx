import Products from "@/assets/components/products";
import React from "react";
import Styles from "@/pages/UsersGrid.module.css";
const Product: React.FC = () => {
  return (
    <>
      <div className={Styles.breadcrumb}>
        <div className={Styles.breadcrumbContent}>
          {/* Add your breadcrumb content here */}
          <h1>All Products</h1>
          <p>Breadcrumb description or additional content goes here.</p>
        </div>
        <div className={Styles.overlay}></div>
      </div>
      <Products />
    </>
  );
};

export default Product;
