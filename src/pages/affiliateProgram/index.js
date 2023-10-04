import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { Button } from "../../components/Button";
import AffiliateInfo from "../../components/AffiliateInfo";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";

const Affiliate = () => {
  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="flex flex-col items-center">
          <div className="w-full -mt-1 ">
            <img src={banner1} alt="Banner1" className=" object-fill" />
          </div>
          <Link to="/affiliate-signup">
            <Button variant="signup">SIGN UP NOW</Button>
          </Link>

          <img src={banner2} alt="Banner2" />
          <Link to="/affiliate-signup">
          <Button variant="signup">SIGN UP NOW</Button>
          </Link>
          
        </div>
        <AffiliateInfo />
      </div>
    </>
  );
};

export default Affiliate;
