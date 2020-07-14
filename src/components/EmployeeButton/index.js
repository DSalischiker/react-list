import React from 'react';
import './index.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from "react-bulma-components";

const EmployeeButton = props => {
    const {
        id,
        handleEmployeeOTM
    } = props;
    /* const handleEmployeeOTM = (event) => console.log('employee of the month: ', id); */
    return (
        <Button className='button is-info' onClick={() => handleEmployeeOTM(id)}>
            <span>Empleade del mes</span>
            <span className='icon is-small'>
                <i className='fas fa-award' />
            </span>
        </Button>
    )
}

export default EmployeeButton;