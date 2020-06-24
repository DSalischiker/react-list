import React from 'react';
import './index.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from "react-bulma-components";

const DeleteButton = props => {
    return (
        <Button className='button is-danger'>
            Delete
        </Button>
    )
}

export default DeleteButton;