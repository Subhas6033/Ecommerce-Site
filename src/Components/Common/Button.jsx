import React, {forwardRef} from 'react'

const Button = forwardRef(({ className = "", children, ...props }, ref) => {
  return (
    <button className={`${className}`} ref={ref} {...props}>
      {children}
    </button>
  );
});

export default Button
