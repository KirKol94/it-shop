import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Page404 from "./pages/Page404/Page404";
import PageStructure from "./components/layout/PageStructure/PageStructure";
import TestPage from "./pages/TestPage/TestPage";
import AuthModal from "./components/modals/AuthModal/AuthModal";
import RegisterModal from "./components/modals/RegisterModal/RegisterModal";

const App: FC = () => {
  return (
    <Routes>
      <Route path="" element={<PageStructure />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<AuthModal />} />
        <Route path="signup" element={<RegisterModal />} />
        <Route path="test-page" element={<TestPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default App;
