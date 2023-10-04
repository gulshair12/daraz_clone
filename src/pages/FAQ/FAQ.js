import React, { useEffect, useState } from "react";
import HelpCenterHomePage from "../../components/Help Center Header/HelpCenterHeader";
import SearchBar from "../../components/SearchBar/SearchBar";
import { TbCategory } from "react-icons/tb";
import Order from "../../components/Order/Order";
import ShippingDelivery from "../../components/Shipping & Delivery/ShippingDelivery";
import Payment from "../../components/Payment/Payment";
import Header from "../../components/Header";
import {
  AccountManagementList,
  DarazCategoriesList,
  OrdersList,
  PaymentsList,
  PromotionsList,
  ReturnsRefundList,
  SellonDarazList,
  ShippingDeliveryList,
} from "../../components/Config/Config";
import ListButton from "../../components/SideBar List/ListButton";
function FAQ() {
  const [isRotatedPro, setIsRotatedPro] = useState(false);
  const [isRotatedAM, setIsRotatedAM] = useState(false);
  const [isRotateDC, setIsRotateDC] = useState(false);
  const [isRotateOrder, setIsRotateOrder] = useState(false);
  const [isRotateSD, setIsRotateSD] = useState(false);
  const [isRotatePaymet, setIsRotatePaymet] = useState(false);
  const [isRotateRR, setIsRotateRR] = useState(false);
  const [isRotateSellOnDaraz, setIsRotateSellOnDaraz] = useState(false);
  // ===========================================================
  const [isOrderDataVisible, setIsOrderDataVisible] = useState(false);
  const [isSDDataVisible, setIsSDDataVisible] = useState(false);
  const [isPaymentDataVisible, setIsPaymentDataVisible] = useState(false);
  // =======================================
  const [isPromotionsOpen, setIsPromotionsOpen] = useState(false);
  const [isAMOpen, setIsAMOpen] = useState(false);
  const [isDCOpen, setIsDCOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isSDOpen, setIsSDOpen] = useState(false);
  const [isPaymetOpen, setIsPaymetOpen] = useState(false);
  const [isRROpen, setIsRROpen] = useState(false);
  const [isSellOnDarazOpen, setIsSellOnDarazOpen] = useState(false);
  const toggleRotationPro = () => {
    setIsRotatedPro(!isRotatedPro);
    setIsPromotionsOpen(!isPromotionsOpen);
  };
  const toggleRotationAM = () => {
    setIsRotatedAM(!isRotatedAM);
    setIsAMOpen(!isAMOpen);
  };
  const toggleRotationDC = () => {
    setIsRotateDC(!isRotateDC);
    setIsDCOpen(!isDCOpen);
  };
  const toggleRotationOrder = () => {
    setIsRotateOrder(!isRotateOrder);
    setIsOrderOpen(!isOrderOpen);

    setIsOrderDataVisible(!isOrderDataVisible);
    setIsSDDataVisible(false);
  };
  const toggleRotationSD = () => {
    setIsRotateSD(!isRotateSD);
    setIsSDOpen(!isSDOpen);
    setIsOrderDataVisible(false);
    setIsSDDataVisible(!isSDDataVisible);
  };
  const toggleRotationPaymet = () => {
    setIsRotatePaymet(!isRotatePaymet);
    setIsPaymetOpen(!isPaymetOpen);
    setIsOrderDataVisible(false);
    setIsSDDataVisible(false);
    setIsPaymentDataVisible(!isPaymentDataVisible);
  };
  const toggleRotationRR = () => {
    setIsRotateRR(!isRotateRR);
    setIsRROpen(!isRROpen);
  };
  const toggleRotationSellOnDaraz = () => {
    setIsRotateSellOnDaraz(!isRotateSellOnDaraz);
    setIsSellOnDarazOpen(!isSellOnDarazOpen);
  };
  return (
    <div className="bg-[#F6F7F9] h-full w-full">
      <Header />
      <HelpCenterHomePage
        FaqButtonClassName="text-[#FF6A00] border-[#FF6A00] border border-t-0 border-l-0 border-r-0 border-b-2"
        HPButtonClassName="text-[#595959] text-[#595959] hover:text-[#FF6A00]"
      />
      <SearchBar />
      <div className=" max-w-6xl mx-auto flex space-x-7">
        <div className="hidden md:block w-1/5  text-white">
          <div className="bg-[#1F1F1F] py-3 text-center text-white flex pl-5 items-center space-x-2">
            <span className="rounded-full bg-orange-500 p-1">
              <TbCategory />
            </span>
            <h1>Categories</h1>
          </div>
          <ListButton
            onClick={toggleRotationPro}
            title="Promotions"
            rotateHook={isRotatedPro}
            listHookOpen={isPromotionsOpen}
            dataArr={PromotionsList}
          />
          <ListButton
            onClick={toggleRotationAM}
            title="Account Management"
            rotateHook={isRotatedAM}
            listHookOpen={isAMOpen}
            dataArr={AccountManagementList}
          />
          <ListButton
            onClick={toggleRotationDC}
            title="Daraz Categories"
            rotateHook={isRotateDC}
            listHookOpen={isDCOpen}
            dataArr={DarazCategoriesList}
          />
          <ListButton
            onClick={toggleRotationOrder}
            title="Orders"
            rotateHook={isRotateOrder}
            listHookOpen={isOrderOpen}
            dataArr={OrdersList}
          />
          <ListButton
            onClick={toggleRotationSD}
            title="Shipping & Delivery"
            rotateHook={isRotateSD}
            listHookOpen={isSDOpen}
            dataArr={ShippingDeliveryList}
          />
          <ListButton
            onClick={toggleRotationPaymet}
            title="Payments"
            rotateHook={isRotatePaymet}
            listHookOpen={isPaymetOpen}
            dataArr={PaymentsList}
          />

          <ListButton
            onClick={toggleRotationRR}
            title="Returns & Refund"
            rotateHook={isRotateRR}
            listHookOpen={isRROpen}
            dataArr={ReturnsRefundList}
          />
          <ListButton
            onClick={toggleRotationSellOnDaraz}
            title="Sell on Daraz"
            rotateHook={isRotateSellOnDaraz}
            listHookOpen={isSellOnDarazOpen}
            dataArr={SellonDarazList}
          />
        </div>
        <div className="w-[80%] px-10 bg-white sm:text-sm ">
          <div className={` ${isOrderDataVisible ? "" : "hidden"}`}>
            <Order />
          </div>
          <div className={` ${isSDDataVisible ? "" : "hidden"}`}>
            <ShippingDelivery />
          </div>
          <div className={` ${isPaymentDataVisible ? "" : "hidden"}`}>
            <Payment />
          </div>
        </div>
      </div>
    </div>
  );
}
export default FAQ;
