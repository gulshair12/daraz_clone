import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Address, {
  action,
} from "./pages/Manage My Account/Address Book/address";
import "./App.css";
import Affiliate from "./pages/affiliateProgram";
import Cart from "./pages/Cart";
import AffiliateSignup, {
  action as affiliateSignupAction,
} from "./pages/affiliateSignup";
import HelpCenter from "./pages/Help Center/HelpCenterHome";
import FAQ from "./pages/FAQ/FAQ";
import Product from "./pages/Product/Product";
import ReturnsRefunds from "./pages/Returns & Refunds/ReturnsRefunds";
import PurchaseProtection from "./pages/Purchase Protection/PurchaseProtection";
import MyPaymentOption, {
  action as bankDetails,
} from "./pages/Manage My Account/My Payment Option/MyPaymentOption";
import { Seller } from "./pages/Become-a-seller";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Become-a-seller",
    element: <Seller />,
  },
  {
    path: "/affiliate",
    element: <Affiliate />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/addressbook",
    element: <Address/>,
    action : action,
  },
  {
    path: "/affiliate-signup",
    element: <AffiliateSignup />,
    action: affiliateSignupAction,
  },
  {
    path: "/help",
    element: <HelpCenter />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/purchaseprotection",
    element: <PurchaseProtection />,
  },
  {
    path: "/returnsrefunds",
    element: <ReturnsRefunds />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/seller",
    element: <Seller/>,
  },
  {
    path: "/payments",
    element: <MyPaymentOption />,
    action: bankDetails,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
