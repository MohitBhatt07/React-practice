import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModalSheet.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className="modal-card">
      <header className="modal-header">
        <h2>{props.title}</h2>
      </header>
      <div className="modal-message">
        <p>{props.message}</p>
      </div>
      <footer className="modal-actions">
        <Button onClick={props.clickHandler} buttonName={"OKAY"} />
      </footer>
    </Card>
  );
};

const ErrorModalSheet = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.clickHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          clickHandler={props.clickHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModalSheet;
