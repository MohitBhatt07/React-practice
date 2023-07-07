import React from "react";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModalSheet.css";

const ErrorModalSheet= (props)=>{
 
  return(
  <div>
    <div className="backdrop">
    <Card className ="modal-card">
      <header className="modal-header">
        <h2>{props.title}</h2>
      </header>
      <div className="modal-message">
        <p>{props.message}</p>
      </div>
      <footer className="modal-actions">
        <Button onClick ={props.clickHandler} buttonName ={"OKAY"}/>
      </footer>
    </Card>
    </div>
    </div>
  )
}

export default ErrorModalSheet;