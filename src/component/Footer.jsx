import React, { useEffect, useState } from "react";
import axios from 'axios'; 
import "./Footer.css"; 

function Footer() {
  const [footerData, setFooterData] = useState({
    footerText1: '',
    footerText2: ''
  });

  async function fetchFooter() {
    try {
      let response = await axios.get(
        "http://localhost:1337/api/Footers?populate=*"
      );
      const data = response.data.data;


      if (data.length >= 2) {
        setFooterData({
          footerText1: data[0].attributes.Footer,
          footerText2: data[1].attributes.Footer
        });
      }
    } catch (error) {
      console.error("Error fetching footer data:", error);
    }
  }

  useEffect(() => {
    fetchFooter();
  }, []);

  return (
    <div className="bg-blue-700 text-white py-3 px-3 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <p className="text-sm font-semibold mb-2">{footerData.footerText1}</p>
        <p className="text-sm font-semibold">{footerData.footerText2}</p>
      </div>
    </div>
  );
}

export default Footer;
