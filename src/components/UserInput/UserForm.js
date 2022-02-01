import React, { useState } from "react";

import styles from "./UserForm.module.css";
import FormButton from "../Button/FormButton";

const UserForm = (props) => {

  // let formValid = true;

  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  // const [isValidated, setIsValidated] = useState(true);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangerHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.length === 0) {
      console.log('testing!');
      //send to app.js to select error message 1
      props.onFormVarify(false);
      props.onReturnErrorMessage('Please enter a valid name and age (non-empty values).');
 
    } else if (enteredAge < 0){
      // send app.js to select error message 2
      props.onFormVarify(false);
      props.onReturnErrorMessage('Please enter a valid age (>0).');
      
    } else {
      props.addUserData(enteredName, enteredAge);

      setEnteredName("");
      setEnteredAge("");
    }

    // console.log(props.addUserData(enteredName, enteredAge));
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label>Username</label>
      <input
        type="text"
        value={enteredName}
        onChange={nameChangeHandler}
      ></input>
      <label>Age (Years)</label>
      <input
        type="number"
        value={enteredAge}
        onChange={ageChangerHandler}
      ></input>
      <FormButton />
    </form>
  );
};

export default UserForm;
