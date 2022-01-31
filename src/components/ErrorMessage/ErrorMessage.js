import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = (props) => {

  return (
    <div className={styles.container} onClick={props.onOkeyButtonHandler}>
      <div className={styles.box}>
        <h2>Invalid Input</h2>
        <p>Please enter a valid name and age (non-empty values).</p>
        <button onClick={props.onOkeyButtonHandler}>Okay</button>
      </div>
    </div>
  );
};

export default ErrorMessage;
