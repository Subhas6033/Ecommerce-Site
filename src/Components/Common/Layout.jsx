import React from "react";

const Layout = ({ className = "", children, ...prop }) => {
  return (
    <div className={`w-full min-h-screen ${className}`} {...prop}>
      {children}
    </div>
  );
};

export default Layout;
