import React, { useState } from "react";
import NewUserForm from "./NewUserForm";
import ErrorModalSheet from "../UI/ErrorModalSheet";
import Card from "../UI/Card";
import "./NewUser.css";

const NewUser = (props) => {
  const [error, setError] = useState();

  const savedDataHandler = (savedData) => {
    const inputName = savedData.name;
    const inputAge = savedData.age;

    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "error in name and age inputs",
      });
      return;
    } 
    if (+inputAge < 1) {
      setError({
        title: "Invalid age",
        message: " Age cannot be negative",
      });
      return;
    } 
    const data = { ...savedData, id: Math.random().toString() };

    props.onNewDetails(data);
  };
  const errorCloseHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModalSheet
          message={error.message}
          title={error.title}
          clickHandler={errorCloseHandler}
        />
      )}
      <Card className="new-user">
        <NewUserForm onSavedData={savedDataHandler} />
      </Card>
    </div>
  );
};

export default NewUser;
