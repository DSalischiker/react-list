import React from 'react';
import './index.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from "react-bulma-components";

const DeleteButton = props => {
    const handleClick = (event) => console.log('clicked delete', event);
    return (
        <Button className='button is-outlined is-danger' onClick={handleClick}>
            Delete
        </Button>
    )
}

export default DeleteButton;