import React from "react";
import "./UserItem.css";


const UserItem = (props)=>{
  const details = props.userName + '(' +props.userAge +'years old )';
  return (
    <div className="user-item">
       {details}
    </div>
  );
}

export default UserItem;