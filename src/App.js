import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import Services from "./Pages/Services";
import Banner from "./components/Banner"; // Import Banner
import Maid from "./Pages/Maid";
import Nursing from "./Pages/Nursing";
import Cta from "./components/Cta";
import Drivers from "./Pages/Drivers";
import Cooks from "./Pages/Cooks";
import Electrician from "./Pages/Electrician";
import Plumber from "./Pages/Plumber";
import Housekeeping from "./Pages/Housekeeping";
import TopNavbar from "./components/TopNavbar";
import FloatingButtons from "./components/FloatingButtons"; // Import FloatingButtons
import "@fortawesome/fontawesome-free/css/all.min.css";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Faq from "./Pages/Faq";
import ExitIntentPopup from "./components/ExitIntentPopup";


function App() {
  return (
    <Router>
      {/* Sticky Navbar */}
      <TopNavbar />
      <Navbar />

      {/* Routes */}
      <div className="container mx-auto">
        <Routes>
          {/* Show Banner only on the Home page */}
          <Route
            path="/"
            element={
              <>
                <Banner /> {/* Banner Component for Home Page */}
                <Home />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/maid" element={<Maid />} />
          <Route path="/nursing" element={<Nursing />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/cooks" element={<Cooks />} />
          <Route path="/electrician" element={<Electrician />} />
          <Route path="/plumber" element={<Plumber />} />
          <Route path="/housekeeping" element={<Housekeeping />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<ExitIntentPopup />} />

        </Routes>
      </div>

      {/* Footer */}
      <Footer />

      {/* Floating Buttons */}
      <FloatingButtons />
    </Router>
  );
}

export default App;
