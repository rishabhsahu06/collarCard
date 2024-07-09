import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Section1 from "./Sections/Section1";
import About from "./Sections/About";
import Patent from "./Sections/Patent";
import FAQComponent from "./Sections/Faq";
import Client from "./Sections/Client";
import Contact from "./Sections/Contact";
import Footer from "./component/Footer";
import Testimonial from "./Sections/Testimonial";
import CollarCard from "./Sections/CollarCard";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Section1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Client />} />
          <Route path="/patents" element={<Patent />} />
          <Route path="/faq" element={<FAQComponent />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <About/>
        <Patent/>
        <FAQComponent/>
        <Client/>
        <Testimonial />
        <Contact/>
        <CollarCard />
        <Footer />
      </>
    </Router>
  );
}

export default App;