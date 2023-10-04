import { useRef, useState } from "react";
import {
  CartIcon,
  ChevronDown,
  GlobeIcon,
  PersonIcon,
  SearchIcon,
} from "../../constants/icons";
import { Button } from "../Button";
import { Input } from "../Input";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import Categories from "../Categories";
import logo from "../../assets/images/logo.png";
import appLogo from "../../assets/images/small-logo.png";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const categoriesRef = useRef(null);
  const languagesRef = useRef(null);
  const accountRef = useRef(null);

  const isLoggedIn = false;

  return (
    <header className="bg-primary w-full pb-4 sticky top-0 z-40 max-md:pt-2 text-white">
      <NavLinks />
      <div className="max-w-7xl mx-auto flex max-lg:gap-5 lg:justify-between items-center max-md:mx-4 md:pt-1">
        <Link to="/">
          <img
            src={logo}
            alt="daraz logo"
            className="max-md:w-[80px] w-[120px]"
          />
        </Link>

        <div
          className="relative"
          onMouseEnter={() => (categoriesRef.current.style.display = "flex")}
          onMouseLeave={() => (categoriesRef.current.style.display = "none")}
        >
          <Button
            variant="tertiary"
            size="small"
            className="max-xl:hidden gap-1"
          >
            <p className="text-sm">Categories</p>
            <ChevronDown />
          </Button>
          <div className="absolute top-full hidden -left-4" ref={categoriesRef}>
            <Categories />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-[2px] flex items-center justify-between w-[620px] px-2">
          <div className="w-[90%]">
            <Input
              type="text"
              name="search"
              id="searchbox"
              value={searchTerm}
              placeholder="Search in Daraz"
              classes="w-full border-none shadow-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button
            variant="naked"
            className="bg-[#FFE0D1] w-10 h-7 rounded-md outline-none border-none"
          >
            <SearchIcon />
          </Button>
        </div>

        {!isLoggedIn ? (
          <div className="flex max-md:gap-[2px] gap-2 items-center max-sm:hidden">
          <Link
            to="/login"
            className="flex gap-1 items-center font-semibold text-sm px-3 py-2 hover:bg-black/10 rounded-lg transition-normal"
          >
            <PersonIcon />
            Login
          </Link>
          <div className="w-[1px] h-10 bg-white" />
          <Link
            to="/signup"
            className="font-semibold text-sm px-3 py-2 hover:bg-black/10 rounded-lg transition-normal"
          >
            Signup
          </Link>
        </div>
        ): (
          <div
          className="relative"
          onMouseEnter={() => (accountRef.current.style.display = "flex")}
          onMouseLeave={() => (accountRef.current.style.display = "none")}
        >
          <Button
            variant="tertiary"
            size="small"
            className="!text-base gap-1 max-md:hidden"
          >
            Account
            <ChevronDown />
          </Button>
          <div
            className="absolute p-2 rounded-md hidden bg-white flex-col gap-2 top-[90%]"
            ref={accountRef}
          >
            <Link
            to="/account-profile"
              className="hover:text-primary text-black px-5 py-1"
            >
              Profile
            </Link>
            <hr />
            <Button
              variant="naked"
              className="hover:text-primary text-black px-5 font-normal"
              onClick={() => {}}
            >
              LogOut
            </Button>
          </div>
        </div>
        )}

        <div
          className="relative"
          onMouseEnter={() => (languagesRef.current.style.display = "flex")}
          onMouseLeave={() => (languagesRef.current.style.display = "none")}
        >
          <Button
            variant="tertiary"
            size="small"
            className="!text-base gap-[2px] max-md:hidden"
          >
            <GlobeIcon />
            EN
            <ChevronDown />
          </Button>
          <div
            className="absolute p-2 rounded-md hidden bg-white flex-col gap-2 top-[90%]"
            ref={languagesRef}
          >
            <Button
              variant="naked"
              className="hover:text-primary text-black px-5 font-normal"
            >
              Urdu
            </Button>
            <hr />
            <Button
              variant="naked"
              className="hover:text-primary text-black px-5 font-normal"
            >
              English
            </Button>
          </div>
        </div>

        <Button variant="tertiary" size="small">
          <CartIcon />
        </Button>
      </div>
    </header>
  );
};

export default Header;

const NavLinks = () => {
  return (
    <nav className="w-full flex justify-between max-w-7xl mx-auto max-md:hidden max-lg:px-2">
      <div className="flex gap-10 pt-1">
        {navLinks.map((link) => (
          <Link
            to={link.link}
            key={link.label}
            className="text-xs font-semibold tracking-wide hover:text-gray-300 transition-normal"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Button
        variant="naked"
        className="bg-black/30 gap-1 px-1 pb-1 pt-[2px] text-[14px] tracking-wide rounded-t-none"
      >
        <img src={appLogo} alt="small daraz logo" className="w-5" />
        Save more on app
      </Button>
    </nav>
  );
};
