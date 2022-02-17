//This is the single place js file for all the states, change functions and submit functions.
//All the states and functions were passed down to its necessary components from here.

//react imports
import React, { useState, useEffect } from "react";

//css imports
import "./App.css";

//components imports
import AddData from "./components/AddData";
import DisplayData from "./components/DisplayData";
import EditData from "./components/EditData";

//helper calls imports
import { getalldata, getalllogs } from "./components/helper/apicalls";
import { addadata, editadata } from "./components/helper/apicalls";

//toastify imports
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  //All states
  const [displayVals, setDisplayVals] = useState({
    totalcalls: "",
    addcalls: "",
    updatecalls: ",",
  });

  const [addDataVal, setAddDataVal] = useState({
    uidata: "",
    datatype: "add",
  });

  const [displayEditVals, setDisplayEditVals] = useState([]);

  const [editedVals, setEditedVals] = useState({
    valId: "",
    uidata: "",
    datatype: "update",
  });

  const [status, setStatus] = useState(false);

  //All functions
  //// Get all functions
  const getDisplayVals = () => {
    getalllogs().then((result) => {
      console.log(result.logs);
      const totalCount = result.logs.length;
      const addCount = result.logs.filter(
        (eachRes) => eachRes.datatype === "add"
      ).length;
      const updateCount = result.logs.filter(
        (eachRes) => eachRes.datatype === "update"
      ).length;

      setDisplayVals({
        ...displayVals,
        totalcalls: totalCount.toLocaleString(),
        addcalls: addCount.toLocaleString(),
        updatecalls: updateCount.toLocaleString(),
      });
    });
  };
  const getDisplayEditVals = () => {
    getalldata().then((result) => {
      setDisplayEditVals(result.data);
    });
  };

  //// handle changes functions
  const handleChange = (name) => (event) => {
    setAddDataVal({ ...addDataVal, [name]: event.target.value });
  };

  const handleEditChange = (name) => (event) => {
    console.log(event.target.value);
    setEditedVals({ ...editedVals, [name]: event.target.value });
  };

  //// submit changes functions
  const submitAddData = () => {
    addadata(addDataVal)
      .then((result) => {
        console.log(result);
        if (result.err) return toast.error("Input field is empty");
        setAddDataVal({ ...addDataVal, uidata: "" });
        setStatus(true);
        toast.success("data added successfully");
      })
      .catch((err) => console.log(err));
  };

  const submitEditedData = () => {
    if (editedVals.uidata === "") return toast.error("Edit data field is empty");
    editadata(editedVals)
      .then((result) => {
        if (result.err) return toast.error("Input field is empty");
        setEditedVals({
          ...editedVals,
          uidata: "",
        });
        setStatus(true);
        toast.success("data updated successfully");
      })
      .catch((err) => console.log(err));
  };

  //useEfect
  useEffect(() => {
    getDisplayVals();
    getDisplayEditVals();
    setStatus(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <div className="App">
      <ToastContainer />
      <div className="firstRow">
        <div className="displayData">
          <DisplayData displayValState={displayVals} />
        </div>
        <div className="addData">
          <AddData
            addDataValState={addDataVal}
            handleDataChange={handleChange("uidata")}
            submitData={submitAddData}
          />
        </div>
      </div>
      <div className="editData">
        <EditData
          allEditData={displayEditVals}
          handleEditChange={handleEditChange}
          editVals={editedVals}
          submitEditChange={submitEditedData}
        />
      </div>
    </div>
  );
}

export default App;
