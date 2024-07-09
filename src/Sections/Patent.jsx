import React from "react";
import "./Patent.css";

function Patent() {
  return (
    <div className="patent-container patents">
      <h2>Trademarks & Copywrites</h2>
      <h1 className="h1-patent">Patents</h1>

      <div className="patent-card-container">
        <div className="patent-left-card">
          <p>
            We take our intellectual property rights seriously, and have <br /> not
            licensed the ability to make CollarCards to any other <br /> company. If
            somebody other than us offers or produces <br /> CollarCards, please let
            us know immediately.
          </p>
        </div>

        <div className="patent-right-card">
          <p>CollarCards are protected by the five following issued <br /> patents and trademarks:</p>
          <ul>
            <li><span><i className="fa-solid fa-chevron-right"></i> US D652,606 S</span></li>
            <li><span><i className="fa-solid fa-chevron-right"></i> US D667,199 S</span></li>
            <li><span><i className="fa-solid fa-chevron-right"></i> US D666,790 S</span></li>
            <li><span><i className="fa-solid fa-chevron-right"></i> US D678,661 S</span></li>
            <li><span><i className="fa-solid fa-chevron-right"></i> US D692,954 S</span></li>
          </ul>
        </div>
      </div>

      <h1 className="h1-trademark text-black">Trademarks:</h1>
      <div className="trademark-container">
        <div className="trademark-left-card">
          <p>
            CollarCard, LLC is the proud owner of the <br />  following registered
            trademarks:
          </p>
        </div>
        <div className="trademark-right-card">
          <p>CollarCard Always in Your Wallet</p>
          <p>Stays in Your Wallet</p>
          <p>
            CollarCard – We Put Your Brand in a Man’s Wallet 24 Hours
            <br /> a Day
          </p>
        </div>
      </div>
    </div>
  );
}

export default Patent;
