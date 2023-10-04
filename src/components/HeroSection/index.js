import Categories from "../Categories";
import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";

const HeroSection = ({ images }) => {
  return (
    <section
      id="hero"
      className="w-full flex justify-between max-lg:h-fit h-[360px]"
    >
      <Categories />

      <Carousel
        className="rounded-xl overflow-hidden w-full h-full lg:w-[calc(100%-240px-20px)] max-lg:h-[200px] relative"
        slideInterval={5000}
      >
        {images.map((item, idx) => (
          <div className="relative" key={idx}>
            <img
              src={item.src}
              alt="top product"
              key={idx}
              className="h-full object-contain"
            />

            <Link
              to={item.link}
              className="max-md:px-6 px-10 py-2 bg-white text-primary rounded-full border-none absolute bottom-6 left-6 max-md:bottom-4 max-md:left-4 font-semibold hover:scale-110 transition-normal"
            >
              Shop Now
            </Link>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
