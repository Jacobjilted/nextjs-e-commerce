// src/pages/_app.tsx
import { CartProvider } from "@/contexts/CartContext";
import Header from "../assets/components/Header/Header";
import Footer from "../assets/components/Footer";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  );
}
