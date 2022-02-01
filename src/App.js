// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";

import UserForm from "./components/UserInput/UserForm";
import UsersList from "./components/UsersList/UsersList";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [counter, setCounter] = useState(0);
  const [usersArray, setUsersArray] = useState([]);
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMassage] = useState("");

  const newUserData = (name, age) => {
    const userData = {
      name: name,
      age: age,
      id: +counter,
    };

    setCounter((prevCount) => {
      return prevCount + 1;
    });

    setUsersArray((prevUser) => {
      return [userData, ...prevUser];
    });

    return usersArray;
  };

  const formValid = (bool) => {
    setIsValid(bool);
  };

  const okayButtonHandler = (event) => {
    setIsValid(true);
  };

  const returnErrorMessage = (message) => {
    setErrorMassage(message);
  };

  return (
    <div className="App">
      <UserForm
        addUserData={newUserData}
        onFormVarify={formValid}
        onReturnErrorMessage={returnErrorMessage}
      />
      <UsersList toRenderUserDataArray={usersArray} />
      {!isValid && (
        <ErrorMessage
          onOkeyButtonHandler={okayButtonHandler}
          theErrorMessage={errorMessage}
        />
      )}
    </div>
  );
}

export default App;
