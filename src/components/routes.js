import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import React from "react";
import HomePage from "./homePage";
import ProductPage from "./productPage";
import CartPage from "./cartPage";
import ContactUsPage from "./contactUsPage";
import LoginPage from "./logInPage";
import RegisterPage from "./registerPage";
export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/contactus" element={<ContactUsPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>


      </Switch>
    </Router>
  );
};
