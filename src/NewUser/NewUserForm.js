import React, { useState } from "react";
import './NewUserForm.css';
import Button from "../UI/Button";
import ErrorModalSheet from "../UI/ErrorModalSheet";

const NewUserForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error , setError] = useState({});
 
  const nameInputHandler = (event) => {
    setInputName(event.target.value);
  };

  const ageInputHandler = (event) => {
    setInputAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // if(inputName.length === 0 && inputAge.length ===0){
    //   console.log("empty");
    //   return;
    // }
    // if(inputName.length === 0){
    //   console.log("name is empty");
    //   return;
    // }
    // if(inputAge.length ===0 ){
    //   console.log("age is empty");
    //   return;
    // }
    
    const details = {
      name: inputName,
      age: inputAge,
    };

    props.onSavedData(details);
    setInputAge("");
    setInputName("");
  };

  
  return (
    <div>
  
    <form onSubmit={submitHandler}>
      <div className="form-controls">
        <div className="form-control">
          <label>User Name</label>
          <input type="text" onChange={nameInputHandler} value={inputName}/>
        </div>
        <div className="form-control">
          <label>Age(in years)</label>
          <input type="number" onChange={ageInputHandler} value={inputAge}/>
        </div>
      </div>
      
      <Button onClick = {submitHandler} buttonName = {"ADD DETAILS"}/>
    </form>
    </div>
  );
};

export default NewUserForm;
