import React from "react";
import NewUserForm from "./NewUserForm";
import Card from "../UI/Card";
import './NewUser.css';

const NewUser= (props)=>{
  const savedDataHandler= (savedData)=>{
    
    const data = {...savedData,id: Math.random().toString()};
    console.log(data);
    props.onNewDetails(data);
  }

  return(
 
    <Card className="new-user">
      <NewUserForm onSavedData = {savedDataHandler}/>
    </Card>

  );
}

export default NewUser;