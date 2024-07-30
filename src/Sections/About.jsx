import React, { useState, useEffect } from "react";
import "./About.css";
import email from "../assets/email.png";
import card from "../assets/card.png";

function About() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/collar-blogs?populate=*');
        const data = await response.json();
        console.log('API Response:', data);

        if (Array.isArray(data.data)) {
          const post = data.data.find(item => item.id === 4);
          if (post) {
            console.log('Post Data:', post);
            setPostData(post);
          } else {
            console.error('Post with id 2 not found.');
          }
        } else {
          console.error('Unexpected API response format:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPostData();
  }, []);

  if (!postData) {
    return <p>Loading...</p>;
  }

  const {
    Title: aboutTitle,
    subTitle: aboutSubTitle,
    paragraph: aboutPara,
    order: aboutOrder,
    orderSubtitle: aboutOrderSubtitle,
    OT1: orderTable1,
    OT2: orderTable2,
    OT3: orderTable3,
    OTimage,
  } = postData.attributes;

  // Ensure OTimage is defined and has the expected structure
  if (!OTimage || !OTimage.data || !OTimage.data.attributes || !OTimage.data.attributes.url) {
    console.error('OTimage data structure is invalid:', OTimage);
    return null; // or handle error appropriately
  }

  return (
    <div id="about">
      <div className="about-container">
        <div className="head">
          <h2>{aboutSubTitle}</h2>
          <h1>{aboutTitle}</h1>
        </div>

        <div className="para-about">
          <p>{aboutPara}</p>
        </div>

        <div className="about-card">
          <div className="card-one">
            <ul>
              <li>
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                CollarCards are one of the most unique and <br /> effective
                promotional products in the <br /> marketplace for men.
              </li>

              <li>
                <span></span>
                <i className="fa-solid fa-chevron-right"></i>
                CollarCards have a nearly 100% usage rate – <br /> which means
                we can put your brand in a man’s <br /> wallet 24 hours a day.
              </li>

              <li>
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                Our low price point makes CollarCards one of <br /> the most
                cost-effective promotional products <br /> on the market.
              </li>
            </ul>
          </div>

          <div className="card-two">
            <ul>
              <li>
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                CollarCards are one of the most unique and <br /> effective
                promotional products in the <br /> marketplace for men.
              </li>

              <li>
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                CollarCards have a nearly 100% usage rate – <br /> which means
                we can put your brand in a man’s <br /> wallet 24 hours a day.
              </li>

              <li>
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                Our low price point makes CollarCards one of <br /> the most
                cost-effective promotional products <br /> on the market.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ordering">
        <div className="head">
          <h2>{aboutOrder}</h2>
          <h1>{aboutOrderSubtitle}</h1>
        </div>

        <div className="ordering-card-container">
          <div className="ordering-card">
            <img src={`http://localhost:1337${OTimage.data.attributes.url}`} alt="OTimage" />
            <p>{orderTable1}</p>
          </div>

          <div className="ordering-card">
            <img src={card} alt="Card" />
            <p>{orderTable2}</p>
          </div>

          <div className="ordering-card">
            <img src={email} alt="Email" />
            <p>{orderTable3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
