import React, { useState } from 'react';
import Form from '../common/form/Form';
import UsersTable from '../common/Table/UsersTable';

const PageAssigment = () => {

    // Data to be use in the Table component
    const [usersInfo, setUsersInfo] = useState([])

    // Adding users from the form to usersInfo 
    const addUsersInfo = (userInfo) => {
        const helperArray = [...usersInfo, userInfo]
        setUsersInfo(helperArray);
    }

    // Remove users from usersInfo, receives index
    const removeUserInfo = (index) => {
        let helperArray = usersInfo
        helperArray[index] = null;
        const newUserInfo = helperArray.filter(element => { return element !== null; });
        setUsersInfo(newUserInfo);
    }

    return (
        <React.Fragment>
            <Form handleUserInfoSubmission={addUsersInfo} />
            <UsersTable data={usersInfo} handleUserInfoDeletion={removeUserInfo} />
        </React.Fragment>
    )
}

export default PageAssigment