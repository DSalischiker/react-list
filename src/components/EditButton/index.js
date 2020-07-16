import React from 'react';
import './index.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from "react-bulma-components";
const EditButton = props => {
    const {
        handleEditEmployee,
        id
    } = props;
    return (
        <Button
            className='button is-primary'
            onClick={() => handleEditEmployee(id)}>
            <span>Editar</span>
            <span className='icon is-small'>
                <i className='fas fa-edit' />
            </span>
        </Button>

    )
}

export default EditButton;