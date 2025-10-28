import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import ShopFullGridPage from "./pages/ShopFullGridPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Cart from "./pages/Cart";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/fullgrid" element={<ShopFullGridPage />} />
          {/*  */}
          <Route path="/productdetails/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/productdetails/:id" element={<ProductDetailsPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
