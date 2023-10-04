import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { BiPlus, BiMinus } from "react-icons/bi";
import FullStarRatingImg from "../../assets/images/RatingFullStarImg.png";
import HafStarRatingImg from "../../assets/images/RatingHafStarImg.png";
import Header from "../../components/Header";
import { images } from "../../components/Config/Config";

function Product() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [num, setNum] = useState(1);

  const goToPrevious = () => {
    setCurrentIndex((index) => {
      if (index === 0) {
        return (index = images.length - 1);
      } else {
        return (index = index - 1);
      }
    });
  };
  const goToNext = () => {
    setCurrentIndex((index) => {
      if (index < images.length - 1) {
        return (index = index + 1);
      } else {
        return (index = 0);
      }
    });
  };
  const handleIncre = () => {
    setNum(num + 1);
  };
  const handleDecre = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };
  return (
    <div className=" w-full bg-[#EFF0F5] ">
      <Header/>
      <div className="max-w-6xl mx-auto md:flex space-x-5 bg-white p-2">
        <div className=" md:w-[500px]">
          <div className="pb-2 border-b-[1px]">
            {images.map((img, index) => {
              if (index === currentIndex) {
                return <img key={index} src={img.pic} />;
              }
            })}
          </div>
          <div className="flex py-3">
            <button onClick={goToPrevious} className="px-1">
              <SlArrowLeft />
            </button>
            <div className="flex justify-center items-center space-x-5 w-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`${
                    index === currentIndex ? "border border-orange-500" : ""
                  }`}
                >
                  <img
                    width={45}
                    onClick={() => setCurrentIndex(index)}
                    className="p-[1px]"
                    src={image.pic}
                    alt={` ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <button onClick={goToNext} className="px-1">
              <SlArrowRight />
            </button>
          </div>
        </div>
        <div className=" md:w-[800px]">
          <div>
            <h1 className="text-[22px] leading-[25.3px]">
              TIGER Tracksuit for Men & Boy printed half Sleeve T-Shirt &
              Trouser for Summer Collection Elegant Trendy Wear
            </h1>
          </div>
          <div className="flex items-center text-[#16849B] text-[12px] leading-[13.8px] mt-4">
            <img className=" w-3" src={FullStarRatingImg} />
            <img className=" w-3" src={FullStarRatingImg} />
            <img className=" w-3" src={FullStarRatingImg} />
            <img className=" w-3" src={FullStarRatingImg} />
            <img className=" w-3" src={HafStarRatingImg} />
            <span className="ml-1 hover:underline cursor-pointer">
              148 Ratings
            </span>
            <span className="ml-1">|</span>
            <span className="ml-1 hover:underline cursor-pointer">
              80 Answered Questions
            </span>
            <br />
          </div>
          <div className="text-[#16849B] text-[12px] leading-[20px] mb-3 mt-3 border-b-[1px] pb-4">
            <span className="text-gray-400 ">Brand:</span>
            <span className="ml-1 hover:underline cursor-pointer">none</span>
            <span className="ml-1">|</span>
            <span className="ml-1 hover:underline cursor-pointer">
              More Men from None
            </span>
          </div>
          <div className="py-2  border-b-[1px]">
            <h1 className="text-4xl text-[#F85606] ">Rs. 989</h1>
            <div className="flex text-[14px]">
              <h3 className="text-gray-400 line-through ">Rs. 1,850</h3>
              <h3 className="ml-2 pb-3">-47%</h3>
            </div>
          </div>
          <div className="flex space-x-5 py-5 text-[12px] leading-[18px]">
            <div>
              <h1 className="text-gray-400">Color Family</h1>
            </div>
            <div className="">
              <div className="pb-2">
                <h1>
                  {images.map((img, index) => {
                    if (index === currentIndex) {
                      return img.color;
                    }
                  })}
                </h1>
              </div>
              <div className="flex justify-center items-center space-x-5 w-full">
                {images.map((image, index) => {
                  if (index < images.length - 1) {
                    return (
                      <div
                        key={index}
                        className={`${
                          index === currentIndex
                            ? "border border-orange-500"
                            : ""
                        }`}
                      >
                        <img
                          width={35}
                          onClick={() => setCurrentIndex(index)}
                          className="p-[1px]"
                          src={image.pic}
                          alt={` ${index + 1}`}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex space-x-5 pb-5 text-[12px] leading-[18px]">
            <div>
              <h1 className="text-gray-400">Size</h1>
            </div>
            <div className="pl-11">
              <div className="pb-2">
                <h1>lnt</h1>
              </div>
              <div className="flex justify-center items-center space-x-5 w-full">
                <h1 className="text-[12px] px-2 py-1 border border-gray-400 hover:text-orange-500 hover:border-orange-500">
                  S
                </h1>
                <h1 className="text-[12px] px-2 py-1 border border-gray-400 hover:text-orange-500 hover:border-orange-500">
                  M
                </h1>
                <h1 className="text-[12px] px-2 py-1 border border-gray-400 hover:text-orange-500 hover:border-orange-500">
                  L
                </h1>
                <h1 className="text-[12px] px-2 py-1 border border-gray-400 hover:text-orange-500 hover:border-orange-500">
                  XL
                </h1>
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex space-x-5 pb-5 text-[12px] leading-[18px]">
            <div>
              <h1 className="text-gray-400">Quantity</h1>
            </div>

            <div className="pb-2 pl-5 flex space-x-3 items-center">
              <button
                onClick={handleDecre}
                className="bg-[#EFF0F5] hover:bg-[#DADADA] p-1.5 hover:text-white"
              >
                <BiMinus size={18} />
              </button>
              <h1 className="text-[14px]">{num}</h1>
              <button
                onClick={handleIncre}
                className="bg-[#EFF0F5] hover:bg-[#DADADA] p-1.5 hover:text-white"
              >
                <BiPlus size={18} />
              </button>
            </div>
            </div>
            <div className="flex space-x-3 text-[16px] text-white">
                <button className="bg-[#2ABBE8] hover:bg-[#26ABD4] leading-[18.4px] w-1/2 py-3 flex items-center justify-center">
                    Buy Now
                </button>
                <button className="bg-[#F57224] hover:bg-[#D0611E] leading-[18.4px] w-1/2 py-3 flex items-center justify-center">
                    Add to Chart
                </button>
          </div>
        </div>
        <div className=" md:w-[400px]"></div>
      </div>
    </div>
  );
}

export default Product;
