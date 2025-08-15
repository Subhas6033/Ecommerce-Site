import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../index";

const Nav = () => {
  const navItems = [
    {
      name: "Deals",
      url: "/deals",
    },
    {
      name: "Food",
      url: "/food",
    },
    {
      name: "Beverages",
      url: "/beverages",
    },
    {
      name: "Household",
      url: "/household",
    },
    {
      name: "Personal Care",
      url: "/personal-care",
    },
    {
      name: "My Orders",
      url: "/order",
    },
  ];

  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-blue-950">
      <h1 className="text-2xl font-semibold px-5" onClick={() => navigate("/")}>
        E-commerce Site
      </h1>
      <Input
        type={"search"}
        placeholder={"Search Here"}
        className={`md:w-96`}
      />
      <ul className="flex flex-wrap justify-evenly items-center gap-5">
        {navItems.map((nav) => (
          <li>
            <Button onClick={() => navigate(nav.url)}>{nav.name}</Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
