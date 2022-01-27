// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

import UserForm from './components/UserInput/UserForm';
import UsersList from './components/UsersList/UsersList';

// const dummyArray = [];

function App() {

  const [counter, setCounter] = useState(0);
  const [usersArray, setUsersArray] = useState([]);
  

  const newUserData = (name, age) => {

    const userData = {
      name: name,
      age: age,
      id: +counter,
    }

    setCounter(prevCount => {
      return prevCount + 1
    });

    // dummyArray.push(userData);
    // console.log(dummyArray);
    // console.log(usersArray);

    setUsersArray((prevUser)=>{
      return [userData, ...prevUser];
    })
    

    return usersArray;
  };

  return (
    <div className="App">
      <UserForm addUserData={newUserData}/>
      <UsersList toRenderUserDataArray={usersArray}/>
    </div>
  );
}

export default App;
