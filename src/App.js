import "./App.css";
import Header from "./components/header";
// import Footer from "./components/footer";
import { BrowserRouter } from "react-router-dom";
import GlobalContextProvider from "./context/globalContext";
import CartContextProvider from "./context/cartContext";

function App() {
  return (
    <GlobalContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <div className="App">
            <Header />
            {/* Lucas estuvo aca */}
            {/* <Footer /> */}
          </div>
        </BrowserRouter>
      </CartContextProvider>
    </GlobalContextProvider>
  );
}

export default App;
