// Component number 1 - to display all the counts 

import React from "react";
import "./DisplayData.css";


const DisplayData = ({ displayValState = "" }) => {
  return (
    <div className="display-container">
      <h1>API Counts Window</h1>
      <div className="display-item-container">
        <div className="display-item">
          <h1>{displayValState.totalcalls}</h1>
          <p>Total api calls</p>
        </div>
        <div className="display-item">
          <h1>{displayValState.addcalls}</h1>
          <p>Add api</p>
        </div>
        <div className="display-item">
          <h1>{displayValState.updatecalls}</h1>
          <p>Update api</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayData;
