import React from 'react';
import './index.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from "react-bulma-components";
const EditButton = props => {
    const handleClick = (event) => console.log('clicked edit', event);
    return (
        <Button className='button is-primary' onClick={handleClick}>
            <span>Editar</span>
            <span className='icon is-small'>
                <i className='fas fa-edit' />
            </span>
        </Button>

    )
}

export default EditButton;