import React from 'react';
import './index.css';
import EditButton from '../EditButton';
import DeleteButton from '../DeleteButton';
import EmployeeButton from '../EmployeeButton';
const Buttons = props => {
    const {
        id,
        handleEmployeeOTM
    } = props;

    return (
        <div className='App-Buttons'>
            <EditButton />
            <DeleteButton />
            <EmployeeButton id={id} handleEmployeeOTM={handleEmployeeOTM} />

        </div>
    )
}

export default Buttons;