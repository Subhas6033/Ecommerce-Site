import React from "react";
import { Footer, Layout, Nav } from "./Components/index";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Layout>
  );
};

export default App;
