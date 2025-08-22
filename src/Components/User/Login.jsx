import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
const Login = ({
    user = "Subhas"
}) => {
  return (
    <div className="h-auto w-20">
      <div className="flex justify-center items-center gap-1">
        <span className="flex justify-center items-center gap-1">
          <span>
            {" "}
            <FaRegUserCircle size={30} />
          </span>
          <span>{user}</span>
          <span>
            {" "}
            <ChevronDown />{" "}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Login;
