import React, { FC } from "react";
import HeaderCategories from "./HeaderCategories/HeaderCategories";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header: FC = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderCategories />
    </header>
  );
};

export default Header;
