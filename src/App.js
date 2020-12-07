import "./App.css";
import Header from "./components/header";
import { Route, Switch, BrowserRouter } from "react-router-dom";
// import Footer from "./components/footer";
import GlobalContextProvider from "./context/globalContext";
import CartContextProvider from "./context/cartContext";
import Cart from "./components/cart";
import ContactUs from "./components/contactUs";
import Categories from "./components/categories";
import Login from "./components/login/logIn";
import MainScreen from "./components/mainScreen";
import ItemDetail from "./components/itemDetail";

function App() {
  return (
    <GlobalContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={MainScreen}></Route>
              <Route path="/contact" component={ContactUs}></Route>
              <Route path="/cart" component={Cart}></Route>
              <Route path="/categories" component={Categories}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/itemDetail/:id" component={ItemDetail}></Route>
            </Switch>
            {/* <Footer /> */}
          </div>
        </BrowserRouter>
      </CartContextProvider>
    </GlobalContextProvider>
  );
}

export default App;
