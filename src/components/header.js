import React, { useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Navbar from "./navbar";
import Cart from "./cart";
import ContactUs from "./contactUs";
import Categories from "./categories";
import Login from "./login/logIn";
import MainScreen from "./mainScreen";
import ItemDetail from "./itemDetail";
import { useCartContext } from "../context/cartContext";

function Header() {
  const cartContext = useCartContext();
  const { items } = cartContext;
  useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <div className="header-wraper">
      <div className="header container d-flex flex-row justify-content-around align-items-center">
        <Link to="/">
          <h1>Logo</h1>
        </Link>
        <Navbar />
        <Link to="/cart">
          <h1>Cart</h1>
          <div className="itemNumberOnCartIcon">{items.length}</div>
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
