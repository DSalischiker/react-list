import React from 'react';
import './index.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from "react-bulma-components";

const EmployeeButton = props => {
    const handleClick = (event) => console.log('clicked employee', event);
    return (
        <Button className='button is-info' onClick={handleClick}>
            EmployeeButton
        </Button>
    )
}

export default EmployeeButton;