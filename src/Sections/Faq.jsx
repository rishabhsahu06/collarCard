import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FAQComponent.css";

const FAQComponent = () => {
  const [faqData, setFaqData] = useState([]);
  const [expandedQuestions, setExpandedQuestions] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/faqs");
        console.log("API Response FAQ:", response.data);
        // Adjusting the data extraction
        const formattedData = response.data.data.map(item => ({
          question: item.attributes.question,
          answer: item.attributes.answers[0].children[0].text // Adjust based on actual data structure
        }));
        setFaqData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleQuestion = (index) => {
    setExpandedQuestions((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  const renderQuestions = (questions, columnIndex) =>
    questions.map((item, index) => {
      const questionKey = `${columnIndex}-${index}`;
      const isExpanded = expandedQuestions[questionKey];
      return (
        <div key={index} className="faq-item">
          <p onClick={() => toggleQuestion(questionKey)}>
            {item.question} <span>{isExpanded ? "-" : "+"}</span>
          </p>
          {isExpanded && <p className="faq-answer">{item.answer}</p>}
        </div>
      );
    });

  return (
    <div className="faq-container faq">
      <h2>FAQs</h2>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-content">
        <div className="faq-column">
          {faqData.length > 0 && renderQuestions(faqData.slice(0, Math.ceil(faqData.length / 2)), "left")}
        </div>
        <div className="faq-column">
          {faqData.length > 0 && renderQuestions(faqData.slice(Math.ceil(faqData.length / 2)), "right")}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
