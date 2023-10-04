import React from "react";
import SVG from "../../../components/SVGs/SVG";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Address Book", href: "/addressbook" },
  { name: "My Payment Option", href: "/payments" },
  { name: "Daraz Wallet", href: "/wallet" },
];
let AccountSideBar = () => {
  return (
    <div>
      <h2 className="text-gray-700 text-sm">Hello, Shahzaib</h2>
      <h3 className="py-3 md:ml-2">
        <span className="flex items-center justify-center bg-green-500 rounded-full text-xs text-white font-semibold w-32 py-1 tracking-wide">
          <SVG
            width={10}
            height={10}
            pathName="Checkmark"
            fill="none"
            viewBox="0 0 10 10"
            strokeColor="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            className="pr-0.5"
          />
          Verified Account
        </span>
      </h3>
      <h1 className="font-semibold text-lg">Manage My Account</h1>
      <ul className="text-gray-500 ml-6">
        {navigation.map((item) => (
          <li key={item.href}>
            <NavLink
              to={item.href}
              className={({ isActive }) => {
                return isActive ? "text-blue-500" : "";
              }}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AccountSideBar;
