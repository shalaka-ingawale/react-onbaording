import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../components/home/home";
import Registration from "../components/registration/registration";
import Login from "../components/login/login";

const AppRouter = () => {
  return (
    <div style={style}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const style = {
  marginTop: "0px",
};

export default AppRouter;
