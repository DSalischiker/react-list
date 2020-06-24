import React from 'react';
import './index.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from "react-bulma-components";

const SearchButton = props => {
    const handleClick = (event) => console.log('clicked search', event);
    return (
        <Button className='button is-success App-SearchButton' onClick={handleClick}>
            Agregar Empleado
        </Button>
    )
}

export default SearchButton;