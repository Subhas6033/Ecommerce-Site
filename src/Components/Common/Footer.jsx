import React from "react";
import { SlideDownAnimation } from "../../Utils/Animation";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const footerItems = [
    {
      name: "Deals",
      url: "/deals",
      category: "Menu",
    },
    {
      name: "Food",
      url: "/food",
      category: "Menu",
    },
    {
      name: "Beverages",
      url: "/beverages",
      category: "Menu",
    },
    {
      name: "Household",
      url: "/household",
      category: "Menu",
    },
    {
      name: "My Orders",
      url: "/order",
      category: "Menu",
    },
    {
      name: "Personal Care",
      url: "/personal-care",
      category: "Menu",
    },
    {
      name: "Vegetables",
      url: "/vegetables",
      category: "Categories",
    },
    {
      name: "Bakery",
      url: "/bakery",
      category: "Categories",
    },
    {
      name: "Wine",
      url: "/wine",
      category: "Categories",
    },
    {
      name: "Dairy & Eggs",
      url: "/dairy",
      category: "Categories",
    },
    {
      name: "Meat & Poultry",
      url: "/meat",
      category: "Categories",
    },
    {
      name: "Soft Drinks",
      url: "/soft-drinks",
      category: "Categories",
    },
    {
      name: "Cleaning Supplies",
      url: "/cleaning-supplies",
      category: "Categories",
    },
    {
      name: "Cereal & Snacks",
      url: "/snacks",
      category: "Categories",
    },
    {
      name: "FAQ",
      url: "/faq",
      category: "info",
    },
    {
      name: "About us",
      url: "/about",
      category: "info",
    },
    {
      name: "Customer Support",
      url: "/support",
      category: "info",
    },
    {
      name: "Locations",
      url: "/location",
      category: "info",
    },
    {
      name: "Favorites",
      url: "/favorites",
      category: "my Choice",
    },
  ];

  const itemCategories = ["Menu", "Categories", "info", "my Choice"];

  const images = [
    {
      name: "Rupay",
      url: "./public/Payment/Rupay.png",
    },
    {
      name: "Paypal",
      url: "./public/Payment/Paypal.jpg",
    },
    {
      name: "Visa",
      url: "./public/Payment/visa.jpg",
    },
    {
      name: "Mastercard",
      url: "./public/Payment/Mastercard.png",
    },
    {
      name: "American Express",
      url: "./public/Payment/American express.png",
    },
  ];

  return (
    <SlideDownAnimation className="bg-footer text-footerText py-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-8">
        {/* Company Branding */}
        <div className="space-y-3 min-w-[200px]">
          <h2 className="text-2xl font-bold">My Company</h2>
          <p className="text-sm text-gray-400">Need Help?</p>
          <p className="text-sm text-gray-400">Visit our Customer Support</p>
          <p className="text-lg font-medium">+123456987</p>
          <div className="flex space-x-4">
            <span className="text-gray-400 cursor-pointer hover:text-white">
              <Facebook />
            </span>
            <span className="text-gray-400 cursor-pointer hover:text-white">
              <Instagram />
            </span>
            <span className="text-gray-400 cursor-pointer hover:text-white">
              <Twitter />
            </span>
            <span className="text-gray-400 cursor-pointer hover:text-white">
              <Youtube />
            </span>
          </div>
        </div>

        {/* categories */}
        <div className="flex flex-wrap gap-12 flex-grow justify-evenly">
          {itemCategories.map((category) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-3">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <ul className="space-y-2">
                {footerItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.url}
                        className="hover:text-white transition-colors duration-200 text-gray-400"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Paymemt sections */}
      <div className="pt-20">
        <div className="w-[85%] h-2 border-t-2 border-gray-700 mx-auto"></div>
        <div className="flex flex-col justify-center items-center">
          <p>
            <ul className="underline flex flex-col md:flex-row justify-center items-center gap-10 pb-5">
              <li>Shipping &amp; returns</li>
              <li>Terms &amp; Conditions</li>
              <li>Payments methods</li>
            </ul>
          </p>
          <p className="text-center">We accept the following payment methods</p>
          <ul className="flex flex-wrap justify-center items-center gap-5 pt-8">
            {images.map((img) => (
              <img
                src={img.url}
                alt={img.name}
                width={80}
                height={60}
                className="bg-cover rounded-md"
              />
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} My Company. All rights reserved.
      </div>
    </SlideDownAnimation>
  );
};

export default Footer;
