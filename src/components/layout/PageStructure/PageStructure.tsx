import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const PageStructure: FC = () => (
  <>
    <Header />

    {/* тут будет меняться контент в зависимости от роута */}
    <Outlet />

    <Footer />
  </>
);

export default PageStructure;
