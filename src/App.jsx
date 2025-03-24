import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
import "animate.css";


function App() {
  return (
    <Router>
      <CursorFollower />

      <div className="min-h-screen flex flex-col">
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
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
