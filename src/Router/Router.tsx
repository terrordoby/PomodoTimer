import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import LayoutDefault from "../layouts/layoutDefault";
import History from "../pages/History";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />}/>
        <Route path="/history" element={<History />}/>
      </Route>
    </Routes>
  );
};

export default Router;
