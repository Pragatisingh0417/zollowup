import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Banner from "./components/Banner";
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
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./components/AuthContext";
import { CartProvider } from "./components/CartContext";
import CheckoutPage from "./Pages/CheckoutPage";
import EmployeeForm from "./Pages/EmployeeForm";
import ConfirmationPage from "./Pages/ConfirmationPage";
import MaidSelectionPage from "./Pages/MaidSelectionPage";
import ReviewPage from "./components/ReviewForm";
import AccountDetails from "./components/AccountDetails";
import EmployeeLogin from "./components/EmployeeLogin";
import EmployeeDashboard from "./Pages/EmployeeDashboard";
import UserLogin from "./components/UserLogin";
import UserSignup from "./components/UserSignup";
import VerifyEmail from "./components/VerifyEmail";
import GoogleRedirectHandler from "./components/GoogleRedirectHandler";
import DashboardPage from "./components/DashboardPage";
import DashboardLayout from "./Pages/DashboardLayout";
import OrderHistory from "./components/OrderHistory";
import Addresses from "./components/Addresses";
import ContactUs from "./components/ContactUs";
import Chat from "./components/Chat";
import MyReviews from "./components/MyReviews";
import EditProfile from "./components/EditProfile";
import SetPasswordPage from "./components/SetPasswordPage";

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
              <Route path="/service-list" element={<ServiceList />} />
              <Route path="/add-service" element={<AddService />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/checkoutpage" element={<CheckoutPage />} />
              <Route path="/employee-form" element={<EmployeeForm />} />
              <Route path="/confirmation" element={<ConfirmationPage />} />
              <Route path="/maid-selection" element={<MaidSelectionPage />} />
              <Route path="/user-signup" element={<UserSignup />} />
              <Route path="/user-login" element={<UserLogin />} />
              <Route path="/review/:bookingId" element={<ReviewPage />} />
              <Route path="/dashboard/account-details" element={<AccountDetails />} />
              <Route path="/employee-login" element={<EmployeeLogin />} />
              <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
              <Route path="/verify-email/:token" element={<VerifyEmail />} />
  <Route path="/set-password" element={<SetPasswordPage />} />  {/* ✅ Add this */}
              <Route path="/user/google-redirect" element={<GoogleRedirectHandler />} />

              {/* PrivateRoute with conditional check for /dashboard */}
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute path="/dashboard">
                    <DashboardLayout />
                  </PrivateRoute>
                }
              >
                <Route index element={<DashboardPage />} />
                <Route path="orders" element={<OrderHistory />} />
                <Route path="addresses" element={<Addresses />} />
                <Route path="contact" element={<ContactUs />} />
                <Route path="chat" element={<Chat />} />
                <Route path="my-reviews" element={<MyReviews />} />
                <Route path="edit-profile" element={<EditProfile />} />


              </Route>
            </Routes>{/* ✅ Close this before the container div ends */}
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
