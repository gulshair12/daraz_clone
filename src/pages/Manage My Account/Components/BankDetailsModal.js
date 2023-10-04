import React from "react";
import easypaisa from "../../../assets/images/easypaisa pay logo - 480x480.png";
import { Form } from "react-router-dom";


let BankDetailsModal = ({ showModal, setShowModal }) => {
  return (
    <div
      className={`w-screen fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center ${
        showModal ? "" : "hidden"
      }`}
    >
      <div className="md:w-2/6 bg-white px-6 py-4">
        <Form method="post">
          <div className="flex justify-between mb-4">
            <p className="text-xl">Add Bank</p>
            <button type="button" onClick={() => setShowModal(false)}>X</button>
          </div>
          <div className="flex mb-4">
            <img src={easypaisa} className="w-10 h-10" />
            <img src={easypaisa} className="w-10 h-10" />
            <img src={easypaisa} className="w-10 h-10" />
          </div>
          
          <div className="mb-4">
            <label htmlFor="name" className="mb-4">
              * Bank Name
            </label>
            <input type="text" name="bankName" className="w-full border p-1" />
          </div>
          <div className="mb-4">
            <label className="my-8">* Account Holder Name</label>
            <input type="text" name="accountName" className="w-full border p-1"/>
          </div>
          <div className="mb-4">
            <label className="my-8">* Account Number/IBAN</label>
            <input type="text" name="number" className="w-full border p-1" />
          </div>
          <div className="flex justify-end py-8">
            <button
              type="submit"
              className="px-3 py-1 bg-green-700 mr-2 text-white"
              onClick={()=>setShowModal(false)}
            >
              Confirm
            </button>
            <button type="button" className="px-3 py-1 bg-green-700 text-white" onClick={()=>setShowModal(false)}>
              Cancel
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default BankDetailsModal;
