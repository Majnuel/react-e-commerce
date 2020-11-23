import "./App.css";
import Header from "./components/header";
// import Footer from "./components/footer";
import { BrowserRouter } from "react-router-dom";
import PruebaContextProvider from "./context/globalContext";

function App() {
  return (
    <PruebaContextProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </PruebaContextProvider>
  );
}

export default App;
