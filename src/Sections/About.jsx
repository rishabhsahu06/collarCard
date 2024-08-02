import React, { useState, useEffect } from "react";
import "./About.css";
import email from "../assets/email.png";
import card from "../assets/card.png";

function About() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/collar-blogs?populate=*');
        const data = await response.json();
        console.log('API Response:', data);

        if (Array.isArray(data.data)) {
          setPostData(data.data); // Set the entire data array
        } else {
          console.error('Unexpected API response format:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPostData();
  }, []);

  if (postData.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div id="about">
      <div className="about-container">
        {postData.map((post) => {
          const {
            aboutTitle,
            aboutSubTitle,
            aboutList,
            aboutPara,
          } = post.attributes;

          return (
            <div key={post.id} className="post-section">
              <div className="head">
                {aboutSubTitle && <h2>{aboutSubTitle}</h2>}
                {aboutTitle && <h1>{aboutTitle}</h1>}
              </div>

              {aboutPara && (
                <div className="para-about">
                  <p>{aboutPara}</p>
                </div>
              )}

              {aboutList && (
                <div className="about-card">
                  <div className="card-one">
                    <ul>
                      <li>
                        <span>
                          <i className="fa-solid fa-chevron-right"></i>
                        </span>
                        {aboutList}
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="ordering">
        <div className="head">
          <h2>Order Information</h2>
          <h1>How to Order</h1>
        </div>

        <div className="ordering-card-container">
          <div className="ordering-card">
            
            <p>Email us for inquiries.</p>
          </div>

          <div className="ordering-card">
            <img src={`http://localhost:1337${card}`} alt="Card" />
            <p>Order through our website.</p>
          </div>

          <div className="ordering-card">
            <img src={`http://localhost:1337${email}`} alt="Email" />
            <p>Call us for more details.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
