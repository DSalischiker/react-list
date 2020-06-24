import React from 'react';
import './index.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from "react-bulma-components";
const EditButton = props => {
    const handleClick = (event) => console.log('clicked edit', event);
    return (
        <Button className='button is-primary' onClick={handleClick}>
            Edit
        </Button>

    )
}

export default EditButton;