import React from "react";
import "./UserItem.css";


const UserItem = (props)=>{

  const deleteHandler = ()=>{
    props.onDelete(props.id);
  }

//   if(props.userName.length === 0 && props.userAge.length === 0)
//   {
//     console.log("empty")
//     return;
//   }
//   if(props.userName.length=== 0){
//     console.log("name cannot be empty");
//     return ;
//   }
//   if(props.userAge.length === 0){
//     console.log("age cannot be empty");
//     return;

// }
  
  const details = props.userName + '(' +props.userAge +'years old )';
  return (
    <div className="user-item" onClick= {deleteHandler}>
       {details}
    </div>
  );
}

export default UserItem;