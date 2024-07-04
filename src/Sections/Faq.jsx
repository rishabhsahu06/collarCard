import React, { useState } from "react";
import "./FAQComponent.css";

const FAQComponent = () => {
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const toggleQuestion = (index) => {
    setExpandedQuestions((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const questionsLeft = [
    {
      question: "What is a CollarCard?",
      answer:
        "A CollarCard is a credit card sized plastic card that contains four high quality pop-out collar stays and is stored in a man’s wallet. We designed CollarCards to address and fix the common problem of men forgetting their collar stays when they leave the house, when they are traveling, or for any occasion when they are wearing a dress shirt.",
    },
    {
      question: "Do men carry loose collar stays in their wallet?",
      answer: "Yes, men...",
    },
    { question: "How do CollarCards work?", answer: "CollarCards work by..." },
    {
      question:
        "Do you have a video demonstration of CollarCards and how they work?",
      answer: "Yes, we have a video...",
    },
    {
      question:
        "Do you work with outside promotional products and marketing firms?",
      answer: "Yes, we do...",
    },
    {
      question: "What is “High Resolution” Artwork?",
      answer: "High Resolution Artwork is...",
    },
    {
      question: "Is your customer service really that good?",
      answer: "Our customer service is...",
    },
    {
      question:
        "Can I leave collar stays in my shirt when dry cleaning, ironing, or pressing?",
      answer: "You can leave collar stays...",
    },
    {
      question: "Where are CollarCards made?",
      answer: "CollarCards are made in...",
    },
    {
      question: "What kind of plastic is used to make CollarCards?",
      answer: "The plastic used in CollarCards is...",
    },
  ];

  const questionsRight = [
    {
      question: "What kind of plastic is used to make CollarCards?",
      answer: "The plastic used in CollarCards is...",
    },
    {
      question: "Are the collar stays in CollarCards made from thin plastic?",
      answer: "Yes, the collar stays are...",
    },
    {
      question:
        "Do you sell CollarCards to individuals and not just companies?",
      answer: "We sell CollarCards to both individuals and companies...",
    },
    {
      question: "Do you sell outside the United States?",
      answer: "Yes, we sell CollarCards internationally...",
    },
    {
      question: "Do you have any intellectual property?",
      answer: "Yes, we have several patents and trademarks...",
    },
    {
      question: "Can I private label CollarCards?",
      answer: "Yes, you can private label CollarCards...",
    },
    {
      question: "What kinds of companies make CollarCards?",
      answer: "CollarCards are made by...",
    },
    {
      question: "Is there any limitation to what I can print on a CollarCard?",
      answer:
        "There are some limitations to what can be printed on a CollarCard...",
    },
    {
      question: "How easy is it to make my own customized CollarCards?",
      answer: "It is very easy to make customized CollarCards...",
    },
    {
      question:
        "Do the logos you print on CollarCards cause the collar stays to show through white dress shirts?",
      answer:
        "The logos printed on CollarCards do not show through white dress shirts...",
    },
    {
      question: "Do any clients use CollarCards as business cards?",
      answer: "Yes, some clients use CollarCards as business cards...",
    },
  ];

  const renderQuestions = (questions, columnIndex) =>
    questions.map((item, index) => {
      const isExpanded = expandedQuestions[`${columnIndex}-${index}`];
      return (
        <div
          key={index}
          className="faq-item"
          onClick={() => toggleQuestion(`${columnIndex}-${index}`)}
        >
          <p>
            {item.question} <span>{isExpanded ? "-" : "+"}</span>
          </p>
          {isExpanded && <p className="faq-answer">{item.answer}</p>}
        </div>
      );
    });

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-content">
        <div className="faq-column">
          {renderQuestions(questionsLeft, "left")}
        </div>
        <div className="faq-column">
          {renderQuestions(questionsRight, "right")}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
