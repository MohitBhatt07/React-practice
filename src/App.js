import React,{useState} from "react";
import UserList from "./UserData/UserList";
import NewUser from "./NewUser/NewUser";

const  dummyUserData = [
  { name: "Mohit", age: 22 ,id : "U1" },
  { name: "Rohit", age: 24 , id : "U2"}
];

function App() {

  const[userData, setDetails] = useState(dummyUserData);

  const addDetailsHandler=(data)=>{
    setDetails((prevDetails)=>{
      // [...prevDetails,data]
      let updatedDetails =[...prevDetails];
      updatedDetails.unshift(data);
      return updatedDetails;
    });
  }
  
  const deleteItemHandler =(detailId)=>{
    setDetails((prevDetails)=>{
      const updatedDetails = prevDetails.filter((currDetail)=>(
        currDetail.id !== detailId
      ))
      return updatedDetails;
    })
  }

  return (
    <div>
      <NewUser onNewDetails = {addDetailsHandler}/>
      <UserList userDetails={userData} onDeleteItem = {deleteItemHandler}/>
    </div>
  );
}

export default App;
