import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./component/Navbar";
import { Provider } from "react-redux";
import Store from "./store/Store";
import Single from "./component/Single";

function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="item/:id" element={<Single />} />
          
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
