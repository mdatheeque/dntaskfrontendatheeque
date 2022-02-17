// Component number 3 - to edit a data

import React from "react";
import "./EditData.css";

const EditData = ({
  allEditData,
  handleEditChange,
  submitEditChange,
  editVals,
}) => {
  return (
    <div className="editData-container">
      <h4 style={{ textAlign: "center" }}>Edit data</h4>
      <div className="editData-items">
        <select id="subTransType" onChange={handleEditChange("valId")}>
          <option value="">Select a value to edit</option>
          {allEditData.map((eachData, index) => {
            return (
              <option key={index} value={eachData._id}>
                {eachData.uidata}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          onChange={handleEditChange("uidata")}
          value={editVals.uidata}
          placeholder="Edit data"
        />
        <button onClick={submitEditChange}>
          <h4>Submit</h4>
        </button>
      </div>
    </div>
  );
};

export default EditData;
