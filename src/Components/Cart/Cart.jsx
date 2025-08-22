import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = ({ totalCart = "" }) => {
  return (
    <div className="">
      <Link
        className="flex justify-center items-center gap-1 cursor-pointer hover:text-slate-300 transition-colors"
        to="/cart"
      >
        <span>
          <ShoppingCart />
          Cart
        </span>
        <span className="ml-1 text-sm font-semibold">
          {totalCart ? totalCart : 0}
        </span>
      </Link>
    </div>
  );
};

export default Cart;
