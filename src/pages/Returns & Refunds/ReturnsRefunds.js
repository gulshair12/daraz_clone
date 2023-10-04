import React from "react";
import darazShopLogo from "../../assets/images/darazShopLogo.png";
import returnsLogo from "../../assets/images/returnLogo.png";
import Header from "../../components/Header";

function ReturnsRefunds() {
  const arr = [
    {
      id: 1,
      count: "1",
      para: "Sign in to your Daraz Account, select My Orders.",
    },
    {
      id: 2,
      count: "2",
      para: `Tap on "Initiate a Return".`,
    },
    {
      id: 3,
      count: "3",
      para: `Select “I want to return the product”.`,
    },
    {
      id: 4,
      count: "4",
      para: "Fill out the Online Return Form with all the relevant information.",
    },
    {
      id: 5,
      count: "5",
      para: "Select Pick Up or Drop Off as per your preference, Submit the request",
    },
    {
      id: 6,
      count: "6",
      para: "Pack your return package securely, with the product in the original and undamaged manufacturer's packaging as delivered to you. Write your order number & return tracking number clearly on the outer side of the package.",
    },
    {
      id: 7,
      count: "7",
      para: "Head to your nearest drop-off point or wait for collection by our pick-up service.",
    },
    {
      id: 8,
      count: "8",
      para: `Make sure you have written your order number and return tracking number on your package at the time of drop off.
      You can view your return tracking number as soon as you have filled the Online Return Form and logged your return request.`,
    },
  ];

  return (
    <div className="w-full">
      <Header/>
      <div className="max-w-6xl mx-auto">
        <div className="py-6 border-b-[1px] border-gray-500">
          <h1 className="text-3xl font-medium">Returns & Refunds</h1>
        </div>
        <div className="flex justify-between items-center py-5">
          <button className="text-center bg-[#F68B1E] md:w-1/3 py-3 font-medium text-white">
            How to Return a Product
          </button>
          <button className="text-center bg-[#F3F3F3] md:w-1/3 py-3  text-black font-medium hover:bg-[#EEEEEE] duration-300">
            Returns Policy
          </button>
          <button className="text-center bg-[#F3F3F3] md:w-1/3 py-3  text-black font-medium hover:bg-[#EEEEEE] duration-300">
            Refunds Policy
          </button>
        </div>
        <div className=" max-w-6xl mx-auto md:flex justify-between ">
          <div className=" md:w-[630px]">
            <ul>
              {arr.map((list) => {
                return (
                  <li
                    key={list.id}
                    className=" py-7 flex space-x-3 items-center border-b-[1px]"
                  >
                    <span className="border-orange-500 border-[3px] rounded-[50%]  px-2 text-[16px]">
                      {list.count}
                    </span>
                    <p className="text-[15px] ">{list.para}</p>
                  </li>
                );
              })}
            </ul>
            <div className="md:flex justify-between py-5">
              <div className="sm:w-full  flex items-center space-x-3 rounded-md py-3 px-14 hover:bg-[#D3D3D3] duration-300 md:w-fit border border-orange-500">
                <div className=" w-24">
                  <img src={darazShopLogo} />
                </div>
                <span className="text-[14px]">
                  <h3>PK-DEX</h3>
                  <h1 className=" font-semibold">View location</h1>
                </span>
              </div>
              <div className="sm:w-full flex items-center space-x-3 rounded-md py-3 px-20 hover:bg-[#D3D3D3] duration-300 md:w-fit border border-orange-500">
                <div className="w-10">
                  <img src={returnsLogo} />
                </div>
                <span className="text-[14px]">
                  <h3>TCS</h3>
                  <h1 className=" font-semibold">View location</h1>
                </span>
              </div>
            </div>
          </div>
          <div className=" md:w-[370px]">
            <div className="border rounded-lg px-10">
              <h1 className="text-2xl text-center font-medium py-3">
                Conditions for Returns
              </h1>
              <ol className=" list-decimal ">
                <li className=" mb-3 leading-5">
                  The product must be unused, unworn, unwashed and without any
                  flaws. Fashion products can be tried on to see if they fit and
                  will still be considered unworn. If a product is returned to
                  us in an inadequate condition, we reserve the right to send it
                  back to you.
                </li>
                <li className=" mb-3 leading-5">
                  The product must include the original tags, user manual,
                  warranty cards, freebies and accessories.
                </li>
                <li className=" mb-3 leading-5">
                  The product must be returned in the original and undamaged
                  manufacturer packaging / box. If the product was delivered in
                  a second layer of Daraz packaging, it must be returned in the
                  same condition with return shipping label attached. Do not put
                  tape or stickers on the manufacturers box.
                </li>
                <p className=" mb-3 leading-5">
                  <span className="font-bold">Note:</span>
                  It is important to indicate the order number and return
                  tracking number on your return package to avoid any
                  inconvenience/delay in process of your return.
                </p>
              </ol>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl text-black font-medium py-5">
                Popular Links
              </h1>
              <a className="text-orange-500 hover:bg-[#D3D3D3] w-fit text-[14px]">
                Frequently Asked Questions
              </a>
              <a className="text-orange-500 hover:bg-[#D3D3D3] w-fit text-[14px]">
                Warranty Policy
              </a>
              <a className="text-orange-500 hover:bg-[#D3D3D3] w-fit text-[14px]">
                Brand Contact List
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReturnsRefunds;
