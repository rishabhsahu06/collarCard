import React from "react";
import "./About.css";
import artwork from "../assets/artwork.png";
import email from "../assets/email.png";
import card from "../assets/card.png";
import back from "../assets/back.png"

function About() {
  return (
    < >
    <div id="about">
      <div className="about-container">
        <div className="head">
          <h2>Know who we are</h2>
          <h1>CollarCard</h1>
        </div>

        <div className="para-about">
          <p>
            A CollarCard is a credit card sized plastic card that contains four
            high quality pop-out collar stays that is <br /> stored in a man’s
            wallet. We invented CollarCards to address and fix the common
            problem of men forgetting <br /> their collar stays when they leave
            the house, when they are traveling, or for any occasion when they
            are <br /> wearing a dress shirt. CollarCards are a great
            promotional product for any company – we have a 100% usage <br />{" "}
            rate and can put any brand in a man’s wallet.
          </p>
        </div>

        <div className="about-card">
          <div className="card-one">
            <ul>
              <li>
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
                CollarCards are one of the most unique and <br /> effective
                promotional products in the <br /> marketplace for men.
              </li>

              <li>
                <span></span>
                <i class="fa-solid fa-chevron-right"></i>
                CollarCards have a nearly 100% usage rate – <br /> which means
                we can put your brand in a man’s <br /> wallet 24 hours a day.
              </li>

              <li>
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
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
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
                CollarCards are one of the most unique and <br /> effective
                promotional products in the <br /> marketplace for men.
              </li>

              <li>
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
                CollarCards have a nearly 100% usage rate – <br /> which means
                we can put your brand in a man’s <br /> wallet 24 hours a day.
              </li>

              <li>
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
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
          <h2>Know how to order</h2>
          <h1>Ordering is Simple</h1>
        </div>

        <div className="ordering-card-container">
          <div className="ordering-card">
            <img src={artwork} alt="" />
            <p>
              Send us your high-resolution artwork for the front of your
              CollarCard and the text you would like printed on the back of each
              collar stay on your CollarCard (email, website, and/or phone
              number.)
            </p>
          </div>

          <div className="ordering-card">
            <img src={card} alt="" />
            <p>
              We will promptly create proofs <br /> and email them to you for
              your <br /> approval.
            </p>
          </div>

          <div className="ordering-card">
            <img src={email} alt="" />
            <p>
              Once you approve and send <br /> payment, we will start to <br /> produce your
              order. Our typical <br /> turnaround time is very fast– <br /> usually only two
              weeks from <br /> the date of your order.
            </p>
          </div>
        </div>
      </div>



{/* compare-container */}

      
</div>
      
    </>
  );
}

export default About;
