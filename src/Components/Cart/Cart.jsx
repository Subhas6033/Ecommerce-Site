import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = ({ totalCart = "" }) => {
  return (
    <Link className="lg:flex justify-center items-center gap-2 px-2 hidden lg:visible" to={"/cart"}>
      <span>
        <span>
          <ShoppingCart />
        </span>
        <span className="text-xl font-semibold absolute top-3 right-53 text-red-500">
          {totalCart ? totalCart : 0}
        </span>
      </span>
      <span>Cart</span>
    </Link>
  );
};

export default Cart;
