import React from "react";
import BannerSlider from "../assets/components/BannerSlider/BannerSlider";
import Products from "../assets/components/products"; // Ensure this path is correct

const images = ["/slide2.webp", "/slide2.webp", "/slide3.webp"];

export default function Home() {
  return (
    <>
      <BannerSlider images={images} />
      <Products />
    </>
  );
}
