import React from "react";
import Aspirasi from "../components/aspirasi/Aspirasi";
import Carousel from "../components/carousel/Carousel";
import CarouselVertical from "../components/carouselVertical/CarouselVertical";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import ProdukHukum from "../components/produkHukum/ProdukHukum";
import Tupoksi from "../components/tupoksi/Tupoksi";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CarouselVertical />
      <Tupoksi />
      <Carousel />
      <ProdukHukum />
      <Aspirasi />
      <Footer />
    </>
  );
}

export default Home;
