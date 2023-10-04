import React, { useState } from "react";
import AccountSideBar from "../Components/Sidebar";
import bankAccount from "../../../assets/images/Bank account.png";
import mobileAccount from "../../../assets/images/Mobile Account.png";
import easypaisa from "../../../assets/images/easypaisa pay logo - 480x480.png";
import jazzcash from "../../../assets/images/Jazz cash logo vector.png";
import BankDetailsModal from "../Components/BankDetailsModal";
import { useActionData } from "react-router-dom";
import Header from "../../../components/Header";

const intitalbankDetail = [
  {
    id: 1,
    bankName: "",
    accountName: "",
    number: "",
  },
];

export const action = async ({ request }) => {
  const bankDetails = await request.formData();
  const bankDetail = Object.fromEntries(bankDetails);
  return bankDetail;
};

const MyPaymentOption = () => {
  const [showModal, setShowModal] = useState(false);
  const [newbankDetails, setNewBankDetails] = useState(intitalbankDetail);
  const result = useActionData();
  const newDetails = result ? [...newbankDetails, result] : newbankDetails;
  return (
    <div>
      <BankDetailsModal showModal={showModal} setShowModal={setShowModal} />
      <Header/>
      <div className="flex items-start justify-evenly bg-gray-200 py-4 ">
        <div>
          <AccountSideBar />
        </div>
        <div className="w-3/5">
          <h1 className="text-2xl mb-4">Daraz Wallet</h1>
          {/* First Half */}
          <div className="bg-white rounded-lg flex flex-col  md:p-6 ">
            <h1 className="text-xl mb-6">My Payment Option</h1>
            <div className="flex flex-col md:flex-row justify-around w-full border md:px-8 py-2 mb-6 rounded-lg">
              <div className="flex items-center">
                <img src={bankAccount} className="w-12 h-12" />
                <label>Bank Account</label>
              </div>
              <div className="w-3/5">
                <div className="md:flex justify-between items-center w-full border-b-2 p-2">
                  {newDetails.slice(1).map((details) => (
                    <div className="md:pr-8">
                      <p>
                        {
                          (details.number =
                            "*".repeat((details.number + "").length - 4) +
                            (details.number + "").slice(-4))
                        }
                      </p>
                      <p className="text-gray-400">{details.bankName}</p>
                    </div>
                  ))}

                  <div className="text-gray-400">
                    <button
                      className={`${newDetails.length <= 1 ? "hidden" : ""}`}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center border border-dashed border-green-500 mt-2 p-2 rounded-md text-sm md:text-md">
                  <button onClick={() => setShowModal(true)}>
                    Add New Account
                  </button>
                </div>
              </div>
            </div>
            {/* Second Half */}
            <div className="flex flex-col md:flex-row justify-around w-full border md:px-8 py-4 rounded-lg">
              <div className="flex items-center">
                <img src={mobileAccount} className="w-12 h-12" />
                <label>Bank Account</label>
              </div>
              <div className="w-3/5">
                <div className="flex items-center border-b-2 pb-3">
                  <img
                    src={easypaisa}
                    className="h-12 w-12 bg-gray-50 mr-2 rounded-md "
                  />
                  <label>Easypaisa account is required</label>
                </div>
                <div>
                  <div className="flex items-center pt-3">
                    <img
                      src={jazzcash}
                      className="h-12 w-12 bg-gray-50 mr-2 rounded-md object-contain"
                    />
                    <label>Jazzcash account is required</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyPaymentOption;
