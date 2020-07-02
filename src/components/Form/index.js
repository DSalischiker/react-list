import React from 'react';
import './index.css';

const Form = (props) => {
    const {
        employeeName,
        handleAddEmployeeSubmit,
        handleAddEmployeeChange
    } = props;

    return (
        <form onSubmit={handleAddEmployeeSubmit} >
            <input className='input' type="text" value={employeeName} onChange={handleAddEmployeeChange} placeholder="Ingrese nombre" />
            <button className='button is-success' type="submit">Agregar empleade</button>
        </form>
    )
}

export default Form;