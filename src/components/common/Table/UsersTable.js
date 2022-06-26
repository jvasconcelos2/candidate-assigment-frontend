import React from 'react'
import './UsersTable.css'

const UsersTable = ({ handleUserInfoDeletion, data }) => {

    return (
        <React.Fragment>
            <table className="table-position">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Birthday</th>
                        <th>Gender</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((row, index) =>
                        <tr key={index}>
                            {/* {console.log(row, index)} */}
                            <th>{row.firstName}</th>
                            <th>{row.birthday}</th>
                            <th>{row.gender}</th>
                            <th>{row.salary} {row.currency}</th>
                            <td>
                                <button onClick={() => handleUserInfoDeletion(index)} style={{ width: '40%' }}>Remove</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default UsersTable