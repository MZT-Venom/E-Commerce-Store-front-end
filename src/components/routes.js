import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import React from "react";
import HomePage from "./homePage";
import productPage from "./productPage";
export const Routes =()=>{
    return(
        <Router>
            <Switch>
                <Route path="" exact>
                    <HomePage/>
                </Route>
                <Route path="/products">
                    <productPage/>
                </Route>
            </Switch>
        </Router>
    )
}