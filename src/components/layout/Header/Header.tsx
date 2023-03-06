import React, { FC } from "react";
import HeaderCategories from "./headerCategories/headerCategories";
import HeaderTop from "./headerTop/headerTop";

const Header: FC = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderCategories />
    </header>
  );
};

export default Header;
