import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css"; 


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
};

function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/testimonials");
        console.log(response.data); 

        if (response.data && Array.isArray(response.data.data)) {
          setTestimonials(response.data.data); 
        } else {
          throw new Error("Invalid data format");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setError("Error fetching testimonials");
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <div>Loading testimonials...</div>;
  }

  if (error) {
    return <div>Error fetching testimonials: {error}</div>;
  }

  return (
    <div className="testimonials">
      <h2>What Clients Say</h2>
      <h1>Testimonials</h1>

      <div className="testimonial-container">
        <div className="slider-container">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div className="testimonial-item" key={testimonial.id}>
                <div className="testimonial-text-container">
                  <p>{testimonial.attributes.testimonialPara}</p>
                </div>
                <div className="testimonial-info-container">
                  <div className="testimonial-name-container">
                    <p>{testimonial.attributes.author}</p>
                  </div>
                  <div className="testimonial-position-container">
                    <p>{testimonial.attributes.authorCity}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
