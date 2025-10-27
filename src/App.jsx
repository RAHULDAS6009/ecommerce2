import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import ShopFullGridPage from "./pages/ShopFullGridPage";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/fullgrid" element={<ShopFullGridPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
