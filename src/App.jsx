import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Volunteer from "./pages/Volunteer";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import DonationPage from "./pages/Donation";
import GetInvolved from "./pages/GetInvolved";
import Gallery from "./pages/Gallery";
import CursorFollower from "./components/CursorFollower";
import ErrorPage from "./pages/ErrorPage";
import Loader from "./components/Loader";
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles


const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Simulates page load time
    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
      AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {loading && <Loader />}
      <div className="fixed top-0 z-50 w-full">
        <Navbar />
      </div>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <CursorFollower />
      <AppContent />
    </Router>
  );
}

export default App;
