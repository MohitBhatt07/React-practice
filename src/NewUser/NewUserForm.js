import React, { useState } from "react";
import './NewUserForm.css';

const NewUserForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  const nameInputHandler = (event) => {
    setInputName(event.target.value);
  };
  const ageInputHandler = (event) => {
    setInputAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const details = {
      name: inputName,
      age: inputAge,
    };

    props.onSavedData(details);
    setInputAge("");
    setInputName("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-controls">
        <div className="form-control">
          <label>User Name</label>
          <input type="text" onChange={nameInputHandler} value={inputName}/>
        </div>
        <div className="form-control">
          <label>Age(in years)</label>
          <input type="text" onChange={ageInputHandler} value={inputAge}/>
        </div>
      </div>
      
      <button type="submit" className="submit-button">ADD DETAILS</button>
    </form>
  );
};

export default NewUserForm;
