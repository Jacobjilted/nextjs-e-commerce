import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div className={styles.column}>
          <h4 className={styles.logofoot}>VAER</h4>
          <p>
            Short intro about the company. This could include a brief
            description or mission statement. Short intro about the company.
            This could include a brief description or mission statement.
          </p>
        </div>
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">All Products</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <a href="#">Checkut</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Privacy Policy</h4>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Newsletter</h4>
          <form>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </footer>
      <div className={styles.copyright}>
        <p>
          &copy; All Rights are reserved by{" "}
          <a href="http://localhost:3000" className={styles.sitelink}>
            VAER
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
