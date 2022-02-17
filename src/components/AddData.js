// Component number 2 - to add a data

import React from "react";
import "./AddData.css";

const AddData = ({ addDataValState = "", handleDataChange, submitData }) => {
  return (
    <div className="addData-container">
      <h4>Add a data</h4>
      <input
        type="text"
        onChange={handleDataChange}
        value={addDataValState.uidata}
        placeholder="Type a text"
      />
      <button onClick={submitData}>
        <h4>Submit</h4>
      </button>
    </div>
  );
};

export default AddData;
