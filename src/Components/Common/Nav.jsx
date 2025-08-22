import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchCheck, X, Menu, LogIn } from "lucide-react";
import { Button, Cart, Input, Login } from "../index";
import { SlideLeftAnimation, SlideRightAnimation } from "../../Utils/Animation";

const Nav = () => {
  const navItems = [
    // {
    //   name: "Deals",
    //   url: "/deals",
    // },
    // {
    //   name: "Food",
    //   url: "/food",
    // },
    // {
    //   name: "Beverages",
    //   url: "/beverages",
    // },
    // {
    //   name: "Household",
    //   url: "/household",
    // },
    // {
    //   name: "Personal Care",
    //   url: "/personal-care",
    // },
    // {
    //   name: "My Orders",
    //   url: "/order",
    // },
  ];

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handelSubmit = (e) => {
    e.preventDefault();
  };

  const toggleMenuBar = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flex flex-wrap justify-between items-center px-6 py-4 bg-white text-black">
      {/* Logo */}
      <h1
        className="text-2xl font-semibold px-2 cursor-pointer hover:text-slate-300 transition-colors"
        onClick={() => navigate("/")}
      >
        E-commerce Site
      </h1>

      {/* Search bar */}
      <div className="hidden md:visible md:flex items-center gap-2">
        <Input
          type="search"
          placeholder="Search Here"
          aria-label="Search products"
          className="md:w-80 px-3 py-2 rounded-md appearance-none"
        />
        <Button aria-label="Search" onClick={() => handelSubmit}>
          <SearchCheck className="w-5 h-5 -ml-10" />
        </Button>
      </div>

      {/* Navigation links */}
      <ul className="hidden md:visible md:flex flex-wrap justify-center items-center gap-3">
        <div className="w-fit px-2 flex justify-center items-center gap-10">
          <div className="">
            <Login />
          </div>
          <div>
            <Cart />
          </div>
        </div>
      </ul>
      {/* Hamberg Button for small screen */}
      <button
        onClick={toggleMenuBar}
        className="absolute top-3 right-3 md:hidden"
      >
        {isMenuOpen ? <X className="size-10" /> : <Menu className="size-10" />}
      </button>

      {/* For small Screeen view */}
      {isMenuOpen && (
        <SlideLeftAnimation
          className={`fixed top-0 left-0 w-40 h-full bg-blue-950 text-white flex flex-col items-center justify-center gap-6 shadow-lg z-50 md:hidden`}
          role="menu"
          aria-label="Mobile Navigation"
        >
          {navItems.map((nav) => (
            <li key={nav.url} role="menuitem" className="list-none">
              <Button onClick={() => navigate(nav.url)}>{nav.name}</Button>
            </li>
          ))}
        </SlideLeftAnimation>
      )}
    </nav>
  );
};

export default Nav;
