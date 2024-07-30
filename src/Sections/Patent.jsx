import React, { useEffect, useState } from "react";
import "./Patent.css";
import axios from "axios";

function Patent() {
  const [postData, setPostData] = useState({}); // Initialize as empty object

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/collar-blogs");
        console.log("API Response:", response.data);

        if (response.data && Array.isArray(response.data.data) && response.data.data.length > 0) {
          const post = response.data.data.find((item) => item.id === 5);
          if (post) {
            console.log("Post Data:", post);
            setPostData(post.attributes); // Store only attributes in state
          } else {
            console.error("Post with id 5 not found.");
          }
        } else {
          console.error("Unexpected API response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Destructure attributes from postData
  const {
    Title: patentTitle,
    subTitle: patentSubTitle,
    paragraph: patentPara,
    order: trademarkTitle,
    list: patentList,
    OT1: paraTrademark,
    OT2: paraRight
  } = postData;

  // Split the patentList string into an array of trademarks
  const trademarks = patentList ? patentList.split("\n").map((item) => item.trim()) : [];

  if (!patentTitle) {
    return <p>Loading...</p>;
  }

  return (
    <div className="patent-container patents">
      <h2>{patentTitle}</h2>
      <h1 className="h1-patent">{patentSubTitle}</h1>

      <div className="patent-card-container">
        <div className="patent-left-card">
          <p>{patentPara}</p>
        </div>

        <div className="patent-right-card">
          <p>
            CollarCards are protected by the following issued <br />{" "}
            patents and trademarks:
          </p>
          <ul>
            {trademarks.map((item, index) => (
              <li key={index}>
                <span>
                  <i className="fa-solid fa-chevron-right"></i> {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h1 className="h1-trademark text-black">{trademarkTitle}</h1>
      <div className="trademark-container">
        <div className="trademark-left-card">
          <p>
            {paraTrademark}
          </p>
        </div>
        <div className="trademark-right-card">
          <p>{paraRight}</p>
        </div>
      </div>
    </div>
  );
}

export default Patent;
