import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousal = ({
  children: Images,
  children: Slide,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [slide, setSlide] = useState(0);

  const pre = () =>
    setSlide((slide) => (slide === 0 ? Images.length - 1 : slide - 1));

  const next = () =>
    setSlide((slide) => (slide === Images.length - 1 ? 0 : slide + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex translate-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${slide * 100}%)` }}
      >
        {Slide}
        {Images}
      </div>
      <div className="absolute inset-0 flex items-center justify-between ">
        <button
          className="p-1  bg-white-80 text-white hover:bg-black"
          onClick={pre}
        >
          <ChevronLeft size={40} />
        </button>
        <button
          className="p-1   bg-white-80 text-white hover:bg-black"
          onClick={next}
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {Images.map((i) => (
            <div
              className={`transition-all w-2 p-1  h-2 bg-white rounded-full ${
                slide === i ? "p-2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousal;
