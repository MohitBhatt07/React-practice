import React from "react";
import UserItem from "./UserItem";
import Card from "../UI/Card";
import "./UserList.css";

const UserList = (props)=>{

  return (
    <Card className ="userList">
      {
        props.userDetails.map((detail,index)=>(
          <UserItem key={index} userName ={detail.name} userAge= {detail.age}/>
        ))
      }
    </Card>
  )
}

export default UserList; 