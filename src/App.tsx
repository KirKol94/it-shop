import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Page404 from "./pages/page-404/page-404";
import PageStructure from "./components/layout/pageStructure/pageStructure";
import TestPage from "./pages/test-page/test-page";
import AuthModal from "./components/modals/authModal/authModal";
import RegisterModal from "./components/modals/registerModal/registerModal";

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
