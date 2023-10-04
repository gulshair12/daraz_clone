import React from "react";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import CallToAction from "../../components/CallToAction";
import CategoryList from "../../components/CategoryList";
import FlashSale from "../../components/FlashSale";
import Products from "../../components/Products";
import ProductCategories from "../../components/ProductCategories";
import { products, images, callToAction } from "../../constants";
import { Button } from "../../components/Button";

const Home = () => {
  return (
    <div className="min-w-screen min-h-screen relative">
      <Header />

      <div id="wrapper" className="max-w-7xl mx-auto max-lg:mx-4 mt-4 mb-10">
        <HeroSection images={images} />

        <CallToAction cta={callToAction} />

        <CategoryList />

        <FlashSale products={products} />

        <ProductCategories />

        <section className="mt-14 flex flex-col gap-5">
          <Products products={products} />
          <Button
            variant="secondary"
            size="large"
            className="self-center rounded-none md:w-1/2"
          >
            Load More
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Home;
