import React from 'react';
import './index.css';
import UserCard from '../UserCard';
const List = (props) => {
    const {
        employeeData,
        handleDeleteEmployee,
        handleEmployeeOTM,
        employeeOTM
    } = props;


    console.log(props, 'Estoy en List');
    return (
        <ul className='App-List'>
            {
                employeeData.map((employee) =>
                    <UserCard employeeData={employee} handleDeleteEmployee={handleDeleteEmployee} key={employee.id} handleEmployeeOTM={handleEmployeeOTM} employeeOTM={employeeOTM} />
                )
            }
        </ul>
    )
}

export default List;