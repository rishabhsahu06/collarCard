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
import useFetch from "./hooks/UseFetch";

export default function App() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/Collar-Blogs?populate=*"
  );
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          {/* Use render props to pass props to Section1 */}
          <Route path="/" element={<Section1 posts={data} />} />
          <Route path="/about" element={<About posts={data} />} />
          <Route path="/clients" element={<Client />} />
          <Route path="/patents" element={<Patent />} />
          <Route path="/faq" element={<FAQComponent />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Render other components outside of Routes */}
        <About posts={data} />
        <Patent />
        <FAQComponent />
        <Client />
        <Testimonial />
        <Contact />
        <CollarCard />
        <Footer />
      </>
    </Router>
  );
}
