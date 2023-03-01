import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Page404 from "../../pages/Page404/Page404";
import Layout from "../Layout/Layout";

const App: FC = () => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default App;
