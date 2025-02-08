import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Records from "../pages/Records";
import About from "../pages/About";
import Guide from "../pages/Guide";
import Hajj from "../pages/Hajj";
import Umra from "../pages/Umra";
import Ticket from "../pages/Ticket";
import HajjBooking from "../pages/HajjBooking";
import UmraBooking from "../pages/UmraBooking";
import HajjPackages from "../pages/HajjPackages";

import Navbar from "../components/Navbar";
import Hajj_Package_1 from "../pages/Hajj_Package_1";
import Hajj_Package_2 from "../pages/Hajj_Package_2";
import Hajj_Package_3 from "../pages/Hajj_Package_3";
import Lecture from "../pages/Lecture";

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
           <Route path="/lecture" element={<Lecture />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/hajj_book" element={<HajjBooking />} />
          <Route path="/umra_book" element={<UmraBooking />} />
          <Route path="/hajj_packages" element={<HajjPackages />} />
          <Route path="/hajj_package_1" element={<Hajj_Package_1 />} />
          <Route path="/hajj_package_2" element={<Hajj_Package_2 />} />
          <Route path="/hajj_package_3" element={<Hajj_Package_3 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default MyRoutes;
