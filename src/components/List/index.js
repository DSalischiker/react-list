import React from 'react';
import './index.css';
import UserCard from '../UserCard';
const List = (props) => {
    const {
        employeeData,
        handleEmployeeOTM
    } = props;
    console.log(props, 'Estoy en List');
    return (
        <ul className='App-List'>
            {
                employeeData.map((employee) =>
                    <UserCard employeeData={employee} key={employee.id} handleEmployeeOTM={handleEmployeeOTM} />
                )
            }
        </ul>
    )
}

export default List;