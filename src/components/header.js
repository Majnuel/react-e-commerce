import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Navbar from "./navbar";
import Cart from "./cart";
import ContactUs from "./contactUs";
import Categories from "./categories";
import Login from "./login/logIn";
import MainScreen from "./mainScreen";
import ItemDetail from "./itemDetail";

function Header() {
  return (
    <div className="header-wraper">
      <div className="header container d-flex flex-row justify-content-around align-items-center">
        <Link to="/">
          <h1>Logo</h1>
        </Link>
        <Navbar />
        <Link to="/cart">
          <Cart />
        </Link>
      </div>
      <Switch>
        <Route exact path="/" component={MainScreen}></Route>
        <Route path="/contact" component={ContactUs}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/categories" component={Categories}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/itemDetail/:id" component={ItemDetail}></Route>
      </Switch>
    </div>
  );
}

export default Header;
