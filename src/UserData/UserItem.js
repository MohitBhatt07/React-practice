import React from "react";
import "./UserItem.css";


const UserItem = (props)=>{

  const deleteHandler = ()=>{
    props.onDelete(props.id);
  }

  const details = props.userName + '(' +props.userAge +'years old )';
  return (
    <div className="user-item" onClick= {deleteHandler}>
       {details}
    </div>
  );
}

export default UserItem;