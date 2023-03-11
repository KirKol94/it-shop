import React, { FC } from "react";
import HeaderCategories from "./headerCategories/HeaderCategories";
import HeaderTop from "./headerTop/HeaderTop";

const Header: FC = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderCategories />
    </header>
  );
};

export default Header;
