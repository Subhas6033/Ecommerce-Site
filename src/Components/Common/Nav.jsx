import React from "react";
import { useNavigate } from "react-router-dom";
import { SearchCheck, X, Menu, LogIn } from "lucide-react";
import { Button, Cart, Input, Login } from "../index";
import { SlideLeftAnimation, SlideRightAnimation } from "../../Utils/Animation";

const Nav = () => {

  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="w-full h-auto px-6 py-4 bg-white text-black">
      <div className="py-1 flex items-center justify-between gap-6">
        {/* Logo - Fixed width for consistency */}
        <div className="flex items-center text-2xl font-bold w-32 flex-shrink-0">
          <h1
            onClick={() => navigate("/")}
            className="hover:cursor-pointer truncate"
          >
            Logo
          </h1>
        </div>

        {/* Search Bar - Flexible center section */}
        <div className="hidden md:flex flex-1 justify-center px-6">
          <form
            onSubmit={handelSubmit}
            className="flex items-center w-full max-w-[500px]"
          >
            <Input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-l-md p-2 w-full h-10"
            />
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r-lg h-10 px-4 flex items-center justify-center"
            >
              <SearchCheck className="w-4 h-4" />
            </Button>
          </form>
        </div>

        {/* Nav Items - Fixed width to match logo section */}
        <div className="flex items-center gap-4 w-32 justify-end flex-shrink-0">
          {/* Location section - hidden on mobile */}
          <div className="hidden lg:flex items-center">
            {/* Location component goes here */}
          </div>

          {/* Action items */}
          <div className="flex items-center gap-3">
            <div className="p-2 hover:bg-gray-100 rounded-md transition-colors">
              <Cart />
            </div>
            <div className="py-2 px-5 hover:bg-gray-100 rounded-md transition-colors hover:cursor-pointer">
              <Login />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden mt-3 pt-3 border-t border-gray-200">
        <form onSubmit={handelSubmit} className="flex items-center w-full">
          <Input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-l-md p-2 w-full h-10"
          />
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r-md h-10 px-4 flex items-center justify-center"
          >
            <SearchCheck className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Nav;