// src/app/layout.tsx
import React from "react";
import { CartProvider } from "@/contexts/CartContext";
import Footer from "@/assets/components/Footer";
import Header from "@/assets/components/Header/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
