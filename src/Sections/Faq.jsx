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
      answer:
        "Never. Loose collar stays would fall out of a man’s wallet. To solve this problem, we invented and designed CollarCards as a way to keep collar stays in a man’s wallet.",
    },
    {
      question: "How do CollarCards work?",
      answer:
        "CollarCards are incredibly easy to use. Simply pop out the number of collar stays you need and put the stays in your shirt; when you are finished using your collar stays, remove the stays from your shirt and snap them back into your CollarCard to store neatly for future use.",
    },
    {
      question:
        "Do you have a video demonstration of CollarCards and how they work?",
      answer:
        "We sure do. One of our clients liked our product so much they made a video for us. Please click here to watch our video.",
    },
    {
      question:
        "Do you work with outside promotional products and marketing firms?",
      answer:
        "We sure do. We are proud members of ASI (Member Number 45636), PPAI (Member Number 538040) and Sage (Member Number 69607), and we work with many thousands of hardworking, dedicated marketing and sales reps throughout the world. CollarCard is owned by a technology entrepreneur, and we have a sophisticated customized CRM that tracks every order we receive – thus ensuring our third party partners are paid on every order and reorder. If you’re a sales specialist at one of these or other firms, please give us a call – we would love to work with you!",
    },
    {
      question: "What is “High Resolution” Artwork?",
      answer:
        "High resolution, or vector artwork, are files at least 300 dpi (dots per inch) at actual size. Typical high resolution formats are: TIFF, JPEG, .cmyk, .eps, and .ai. If you’re not familiar with your logo image specifications, a graphic designer can help you locate and understand files that meet CollarCard Art Proof requirements. Files sent to CollarCard larger than 60 MB should be compressed. We are happy to answer any questions about your art at sales@collarcard.com.",
    },
    {
      question: "Is your customer service really that good?",
      answer:
        "Yes it is. In the history of our business we have never had an unhappy customer. We are obsessed with great customer service – we are friendly, fast, and laser focused on making sure our customers are happy. Please give us a call to find out how good our customer service really is.",
    },
    {
      question:
        "Can I leave collar stays in my shirt when dry cleaning, ironing, or pressing?",
      answer:
        "No. Unfortunately, all collar stays should be removed prior to cleaning, pressing, or ironing shirts.",
    },
    {
      question: "Where are CollarCards made?",
      answer:
        "While most collar stays are manufactured overseas, we believe in American-made goods and all CollarCards are proudly made in the United States.",
    },
    {
      question: "What kind of plastic is used to make CollarCards?",
      answer: "The plastic used in CollarCards is...",
    },
  ];

  const questionsRight = [
    {
      question: "What kind of plastic is used to make CollarCards?",
      answer:
        "While other collar stay manufacturers may use thinner and lesser quality plastic to make collar stays, we are an environmentally friendly company and we make all CollarCards out of environmentally-friendly Teslin.",
    },
    {
      question: "Are the collar stays in CollarCards made from thin plastic?",
      answer:
        "No, we like high quality products and we designed CollarCards to contain high quality collar stays. CollarCards measure the same width as a credit card, and the collar stays inside are made of thick, sturdy plastic.",
    },
    {
      question:
        "Do you sell CollarCards to individuals and not just companies?",
      answer:
        "Yes, we do. Please click here for your options to purchase CollarCards.",
    },
    {
      question: "Do you sell outside the United States?",
      answer:
        "You bet we do. We have thousands of happy customers around the world.",
    },
    {
      question: "Do you have any intellectual property?",
      answer:
        "Yes – we have five issued patents and three registered trademarks – please see the PATENTS section above. As a one–product company, we take our intellectual property seriously – which means we vigorously protect our patents and trademarks. As a matter of company policy, every CollarCard we produce includes one of our patents numbers and website.",
    },
    {
      question: "Can I private label CollarCards?",
      answer:
        "Yes, and we hope you do because making private label CollarCards is our specialty. We make customized CollarCards for any type of business. CollarCards offer companies a great, cost effective way to put your brand in a man’s wallet 24 hours a day. Please click here if you are interested in learning more or call us at (877) 832-4403 or (310) 472-5476 and one of our extremely friendly CollarCard representatives will call you back promptly.",
    },
    {
      question: "What kinds of companies make CollarCards?",
      answer:
        "All kinds. Our clients include dry cleaners, hotels, men’s retailers, department stores, shirt makers, liquor companies, food companies, promotional products firms, law firms, hedge funds, accounting firms, banks, investment banks, rehabilitation centers, architects, jet charter companies, Fortune 500 companies – and any other company that wants a cool, fun, cost effective way to put their brand in a man’s wallet 24 hours a day.",
    },
    {
      question: "Is there any limitation to what I can print on a CollarCard?",
      answer:
        "No, the sky is the limit. You can print anything you want on CollarCards, and some of our more creative clients have made pieces that resemble fine art. We print full color on the front, one color on the back. You can even put a photograph on your cards.",
    },
    {
      question: "How easy is it to make my own customized CollarCards?",
      answer:
        "It’s incredibly easy. You simply send us your art ready logo in high resolution / vector format and we will promptly send you a CollarCard proof in portable document format (PDF). If you have any changes to your proof, we will promptly make those changes. Once you approve your CollarCard proof, we make your CollarCards.",
    },
    {
      question:
        "Do the logos you print on CollarCards cause the collar stays to show through white dress shirts?",
      answer:
        "No. We print a light grey color on the back of CollarCards to make sure the collar stays do not show through white shirts.",
    },
    {
      question: "Do any clients use CollarCards as business cards?",
      answer:
        "Yes, they do. And we would encourage you to as well. CollarCards cost more than traditional business cards made of paper, but unlike traditional business cards nobody throws CollarCards away. If you want to put your business card in man’s wallet 24 hours a day, and have something unique that stands out and makes a nice impression, you should buy CollarCards and make them your business card. In addition to being an effective marketing tool, CollarCards are extremely cool.",
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


    <div className="faq-container faq">
      <h2>FAQs</h2>
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
