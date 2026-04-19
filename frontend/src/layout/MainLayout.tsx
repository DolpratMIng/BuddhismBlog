import React from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Nav></Nav>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
