import React from 'react';

import styles from './FormButton.module.css';

const FormButton = () => {
    return (
        <button type='submit' className={styles.button}>Add User</button>
    )
};

export default FormButton;