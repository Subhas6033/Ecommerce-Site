import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = ({ totalCart = "" }) => {
  return (
    <Link className="flex justify-center items-center gap-2 px-2" to={"/cart"}>
      <span>
        <span>
          <ShoppingCart />
        </span>
        <span className="text-xl font-semibold absolute top-0 right-45">
          {totalCart ? totalCart : 0}
        </span>
      </span>
      <span>Cart</span>
    </Link>
  );
};

export default Cart;
