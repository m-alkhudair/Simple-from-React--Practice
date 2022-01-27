import React, { useState } from "react";

import styles from './UserForm.module.css';
import FormButton from "../Button/FormButton";

const UserForm = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const ageChangerHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        props.addUserData(enteredName, enteredAge);

        setEnteredName('');
        setEnteredAge('');
        
        // console.log(props.addUserData(enteredName, enteredAge));
    };


  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label>Username</label>
      <input type='text' value={enteredName} onChange={nameChangeHandler}></input>
      <label>Age (Years)</label>
      <input type='number' value={enteredAge} onChange={ageChangerHandler}></input>
      <FormButton />
    </form>
  );
};

export default UserForm;
