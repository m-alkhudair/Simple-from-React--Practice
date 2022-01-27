import React from 'react';

import styles from './UsersList.module.css';

const UsersList = (props) => {

    
    let toHide = true

    if (props.toRenderUserDataArray.length > 0) {
         toHide = false
    } else {
        toHide = true
    }


    return (
        <ul className={`${styles.list} ${toHide && styles.hide}`}>
            {props.toRenderUserDataArray.map((item) => (
                <li key={item.id}>{`${item.name} (${item.age} Years Old)`}</li>
            ))}
        </ul>
    )
};

export default UsersList;