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
    setDetails((prevDetails)=>(
      [...prevDetails,data]
    ));
  }
  
  return (
    <div>
      <NewUser onNewDetails = {addDetailsHandler}/>
      <UserList userDetails={userData} />
    </div>
  );
}

export default App;
