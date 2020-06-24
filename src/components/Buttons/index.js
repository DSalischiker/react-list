import React from 'react';
import './index.css';
import EditButton from '../EditButton';
import DeleteButton from '../DeleteButton';
import EmployeeButton from '../EmployeeButton';
const Buttons = props => {
    return (
        <div className='App-Buttons'>
            <EditButton />
            <DeleteButton />
            <EmployeeButton />

        </div>
    )
}

export default Buttons;