import React, { forwardRef, useId } from "react";

const Input = forwardRef(
  ({ type = "", placeholder = "", label = "", className = "", ...props }, ref) => {
    const id = useId();
    return (
      <>
        {label && <label>{label}</label>}
        <input
          id={id}
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`w-60 h-8 px-2 py-2 rounded border border-slate-300 ${className}`}
          {...props}
        />
      </>
    );
  }
);

export default Input;