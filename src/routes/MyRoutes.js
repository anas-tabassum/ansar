import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import About from "../pages/About";
import Guide from "../pages/Guide";
import Hajj from "../pages/Hajj";
import Umra from "../pages/Umra";
import Ticket from "../pages/Ticket";
import Booking from "../pages/Booking";

import Navbar from "../components/Navbar";

const MyRoutes = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="hajj" element={<Hajj />} />
          <Route path="umra" element={<Umra />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/book" element={<Booking />} />
        </Routes>
      </Router>
    </div>
  );
};

export default MyRoutes;
