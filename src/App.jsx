import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import ShopFullGridPage from "./pages/ShopFullGridPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Cart from "./pages/Cart";

import FloatingWhatsApp from "./components/FloatingWhatsApp";
import StickyOrderBar from "./components/StickyOrderBar";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/fullgrid" element={<ShopFullGridPage />} />
          <Route path="/productdetails/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>

        {/* WhatsApp bubble (always on top of pages) */}
        <FloatingWhatsApp
          phone="919876543210"            // <-- put your number
          message="Hi! I want to order."
          position="right"                 // "left" or "right"
          offsetX={10}
          offsetY={70}
          showLabel={false}               // set true to show small label
          zIndex={9999}                   // above everything
        />

        {/* Sticky “Order Now — COD” bar (bottom center) */}
        <StickyOrderBar
          href="/cart"                    // or "/checkout"
          ctaText="Order Now – Cash on Delivery"
          subText="15 days money back guarantee"
          bg="#222420ff"
          textColor="#ffffff"
          zIndex={9998}                   // slightly below WhatsApp
          showOnScroll={false}             // set false to always visible
          minScrollPx={120}
          stickyOnMobileOnly={false}
        />
      </Router>
    </div>
  );
}
export default App;
