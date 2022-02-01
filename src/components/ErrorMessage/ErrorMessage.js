import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = (props) => {

    const stopClick = (event) => {
        event.stopPropagation();
    };

  return (
    <div className={styles.container} onClick={props.onOkeyButtonHandler}>
      <div className={styles.box} onClick={stopClick}>
        <h2>Invalid Input</h2>
        <p>{props.theErrorMessage}</p>
        <button onClick={props.onOkeyButtonHandler}>Okay</button>
      </div>
    </div>
  );
};

export default ErrorMessage;
