import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Banner from "./components/Banner";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";
import ServiceList from "./components/ServiceList";
import AddService from "./components/AddService";
import Pricing from "./components/Pricing";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Maid from "./Pages/Maid";
import Nursing from "./Pages/Nursing";
import Drivers from "./Pages/Drivers";
import Cooks from "./Pages/Cooks";
import Electrician from "./Pages/Electrician";
import Plumber from "./Pages/Plumber";
import Housekeeping from "./Pages/Housekeeping";
import DashboardPage from "./Pages/DashboardPage";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./components/AuthContext";
import { CartProvider } from "./components/CartContext";
import CheckoutPage from "./Pages/CheckoutPage";
import EmployeeForm from "./Pages/EmployeeForm";
import ConfirmationPage from "./Pages/ConfirmationPage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import MaidSelectionPage from "./Pages/MaidSelectionPage";
import UserSignup from "./components/UserSignup";
import ReviewPage from "./components/ReviewForm";
import AccountDetails from "./components/AccountDetails";

function App() {
  return (
    <Router>

    <AuthProvider>
      <CartProvider>
          {/* Top and Main Navbar */}
          <TopNavbar />
          <Navbar />

          {/* Routes */}
          <div className="container mx-auto">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Banner />
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
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<LoginModal />} />
              <Route path="/signup" element={<SignupModal />} />
              <Route path="/service-list" element={<ServiceList />} />
              <Route path="/add-service" element={<AddService />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/checkoutpage" element={<CheckoutPage />} />
              <Route path="/employee-form" element={<EmployeeForm />} />
              <Route path="/confirmation" element={<ConfirmationPage />} />
              <Route path="/maid-selection" element={<MaidSelectionPage />} />
              <Route path="/user-signup" element={<UserSignup />} />
              <Route path="/review/:bookingId" element={<ReviewPage />} />
              <Route path="/dashboard/account-details" element={<AccountDetails />} />




              {/* PrivateRoute with conditional check for /dashboard */}
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute path="/dashboard">
                    <DashboardPage />
                  </PrivateRoute>
                }

              />
            </Routes>
          </div>

      
          {/* Footer & Floating Chat/Buttons */}
          <Footer />
          <FloatingButtons />
      </CartProvider>
    </AuthProvider>
    </Router>

  );
}

export default App;
