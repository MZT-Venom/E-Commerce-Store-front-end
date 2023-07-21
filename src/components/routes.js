import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import React from "react";
import HomePage from "./homePage";
import ProductPage from "./productPage";
export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
      </Switch>
    </Router>
  );
};
