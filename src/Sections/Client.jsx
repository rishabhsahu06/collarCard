import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Client.css";

function Client() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [heading, setHeading] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/clients?populate=*");
        setImages(response.data.data);

        // Set dynamic heading from the response
        if (response.data.data.length > 0) {
          setHeading(response.data.data[0].attributes.titleHeading);
        }

        setLoading(false);
      } catch (error) {
        setError(error.message || "An error occurred while fetching data.");
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "ALL"
      ? images
      : images.filter((image) => {
          const categories = image.attributes.category;
          return (
            categories &&
            categories.some(
              (cat) => cat.children[0].text === selectedCategory
            )
          );
        });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="clients">
      <h2 className="h2-client">Works</h2>
      <h1 className="h1-client">Clients</h1>
      <div className="button-client-container">
        <ul>
          <li>
            <button onClick={() => handleCategoryChange("ALL")}>ALL</button>
          </li>
          <li>
            <button onClick={() => handleCategoryChange("Business")}>
              Business
            </button>
          </li>
          <li>
            <button onClick={() => handleCategoryChange("Dry Cleaners")}>
              Dry Cleaners
            </button>
          </li>
          <li>
            <button onClick={() => handleCategoryChange("Fashion")}>
              Fashion
            </button>
          </li>
          <li>
            <button onClick={() => handleCategoryChange("Hotel")}>Hotel</button>
          </li>
        </ul>
      </div>
      <div className="client-img-container mt-10">
        {filteredImages.map((image) => (
          <img
            key={image.id}
            src={`http://localhost:1337${getImageUrl(image)}`}
            alt={image.attributes.titleHeading || "Client Image"}
          />
        ))}
      </div>
    </div>
  );
}

function getImageUrl(image) {
  // Check if 'small' format exists, otherwise use 'url' directly
  const { formats, url } = image.attributes.image.data[0].attributes;
  return (formats && formats.small) ? formats.small.url : url;
}

export default Client;
