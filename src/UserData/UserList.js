import React from "react";
import UserItem from "./UserItem";
import Card from "../UI/Card";
import "./UserList.css";


const UserList = (props)=>{
  // if(props.userDetails.length === 0)
  //   return ;
  return (
    <div>
    <Card className ="userList">
      { 
        props.userDetails.map((detail)=>(
          <UserItem key={detail.id} userName ={detail.name} userAge= {detail.age} id= {detail.id} onDelete = {props.onDeleteItem}/>
        ))
      }
    </Card>
    </div>
  )
}

export default UserList; 