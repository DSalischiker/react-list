import React from 'react';
import './index.css';
import EditButton from '../EditButton';
import DeleteButton from '../DeleteButton';
import EmployeeButton from '../EmployeeButton';
const Buttons = props => {
    const {
        id,
        handleEmployeeOTM,
        isMonthEmployee
    } = props;

    return (
        <div className='App-Buttons'>
            <EditButton />
            <DeleteButton />
            {!isMonthEmployee &&
                <EmployeeButton id={id} handleEmployeeOTM={handleEmployeeOTM} />
            }
            {isMonthEmployee &&
                <p className='EOTM'>Empleade del mes!</p>}

        </div>
    )
}

export default Buttons;