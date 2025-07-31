import Intro from "./components/Intro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DishOfTheDay from "./pages/DishOfTheDay";
import DevCookbook from "./pages/DevCookbook";
import WhyThisMatters from "./pages/WhyThisMatters";
import Footer from "./components/Footer";
import PencilTrail from "./components/PencilTrail";

function App() {
  return (
    <div className="relative bg-white text-gray-900 font-sans">

      <Router>
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/dish-of-the-day" element={<DishOfTheDay />} />
            <Route path="/dev-cookbook" element={<DevCookbook />} />
            <Route path="/why-this-matters" element={<WhyThisMatters />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
