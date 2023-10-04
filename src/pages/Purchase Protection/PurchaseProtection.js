import React from "react";
import GenuineProducts from "../../assets/images/Genuine Products.png";
import SafeSecurPayments from "../../assets/images/Safe & Secure Payments.png";
import FreeEasyReturns from "../../assets/images/Free & Easy Returns.png";
import Header from "../../components/Header";

function PurchaseProtection() {
  return (
    <div className=" w-full">
      <Header/>
      <div className=" max-w-6xl mx-auto py-10">
        <div className="flex flex-col items-center justify-center bg-gradient-to-t to-[#FFF0A9] from-[#FCCC47] via-[#FCCC47] py-5">
          <h1 className="text-[#02346A] text-3xl font-bold py-5">
            PURCHASE PROTECTION IS OUR BIGGEST COMMITMENT
          </h1>
          <p className="text-[#33334A] text-[20px] text-center">
            At Daraz, we take pride in ensuring our customer's privacy and
            safeguard them <br /> against low quality products and sellers
          </p>
        </div>
        <div className="p-5 py-6 flex justify-center items-center  space-x-7">
          <div className="border flex justify-center items-center flex-col bg-[#EBEBEB] p-5 mb-3">
            <div className=" w-24 h-24 mb-3">
              <img src={GenuineProducts} />
            </div>
            <h1 className="text-[#02346A] font-semibold py-3 text-xl">
              Genuine Products
            </h1>
            <p className="text-center text-[14px]">
              We have made it to our mission to offer only genuine products in
              the original packaging on Daraz. We work hard to provide you with
              the largest selection of authentic and brand new product at the
              highest quality
            </p>
          </div>
          <div className="border flex justify-center items-center flex-col bg-[#EBEBEB] p-5 mb-3">
            <div className=" w-24 h-24 mb-3">
              <img src={SafeSecurPayments} />
            </div>
            <h1 className="text-[#02346A] font-semibold py-3 text-xl">
            Safe & Secure Payments
            </h1>
            <p className="text-center text-[14px]">
            Whether you pay on delivery or conveniently with one of our digital payment methods, your privacy is important to us and we keep your data secure. For Further information, please visit our <a className="text-[#FF6A00] cursor-pointer">Privacy Agreement Page</a> 
            </p>
          </div>
          <div className="border flex justify-center items-center flex-col bg-[#EBEBEB] p-5 mb-3">
            <div className=" w-24 h-24 mb-3">
              <img src={FreeEasyReturns} />
            </div>
            <h1 className="text-[#02346A] font-semibold py-3 text-xl">
            Free & Easy Returns
            </h1>
            <p className="text-center text-[14px]">
            Returns are easy and free of charges. For further information on the detailed term, aswell as on how to return your product, For Further information, please visit our <a className="text-[#FF6A00] cursor-pointer">Return & Refunds Page</a> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseProtection;
