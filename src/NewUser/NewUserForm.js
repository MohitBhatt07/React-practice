import React, { useRef} from "react";
import './NewUserForm.css';
import Button from "../UI/Button";

const NewUserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [inputName, setInputName] = useState("");
  // const [inputAge, setInputAge] = useState("");
 


  // const nameInputHandler = (event) => {
    
  //   setInputName(event.target.value);
  // };

  // const ageInputHandler = (event) => {
  //   setInputAge(event.target.value);
  // };

  const submitHandler = (event) => {
    
    event.preventDefault();

    const details = {
      name: nameInputRef.current.value,
      age: ageInputRef.current.value,
    };

    props.onSavedData(details);
    nameInputRef.current.value = '';
    ageInputRef.current.value = "";
    // setInputAge("");
    // setInputName("");
  };

  
  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
      <div className="form-controls">
        <div className="form-control">
          <label>User Name</label>
          <input type="text" ref={nameInputRef}/>
        </div>
        <div className="form-control">
          <label>Age(in years)</label>
          <input type="number"  ref ={ageInputRef}/>
        </div>
      </div>
      
      <Button onClick = {submitHandler} buttonName = {"ADD DETAILS"}/>
    </form>
    </React.Fragment>
  );
};

export default NewUserForm;
