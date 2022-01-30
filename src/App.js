// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";

import UserForm from "./components/UserInput/UserForm";
import UsersList from "./components/UsersList/UsersList";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

// const dummyArray = [];

function App() {
  const [counter, setCounter] = useState(0);
  const [usersArray, setUsersArray] = useState([]);
  const [isValid, setIsValid] = useState(true);

  const newUserData = (name, age) => {
    const userData = {
      name: name,
      age: age,
      id: +counter,
    };

    setCounter((prevCount) => {
      return prevCount + 1;
    });

    // dummyArray.push(userData);
    // console.log(dummyArray);
    // console.log(usersArray);

    setUsersArray((prevUser) => {
      return [userData, ...prevUser];
    });

    return usersArray;
  };

  const formValid = (bool) => {
    setIsValid(bool);
  };

  return (
    <div className="App">
      <UserForm addUserData={newUserData} onFormVarify={formValid} />
      <UsersList toRenderUserDataArray={usersArray} />
      {!isValid && <ErrorMessage />}
    </div>
  );
}

export default App;
