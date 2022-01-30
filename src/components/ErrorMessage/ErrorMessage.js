import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>Invalid Input</h2>
        <p>Please enter a valid name and age (non-empty values).</p>
        <button>Okay</button>
      </div>
    </div>
  );
};

export default ErrorMessage;
