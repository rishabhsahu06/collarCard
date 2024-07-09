import React from 'react'
import back from "../assets/back.png"

function Compare() {
  return (
    <>
    <div className="compare-container">
        <div className="left-compare">
  <img src={back} alt="" />
        </div>
        <div className="right-compare">
     <h2>Compare</h2>
     <h1>Usage Rates</h1>
     <span> Collar Cards
      <div className="progress"></div>
     </span>
        </div>
    </div>


    </>
  )
}

export default Compare
