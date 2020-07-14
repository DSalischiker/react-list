import React from 'react';
import './index.css';

const Form = (props) => {
    const {
        employeeName,
        handleAddEmployeeSubmit,
        handleAddEmployeeChange
    } = props;

    return (
        <div className='container_form'>
            <form onSubmit={handleAddEmployeeSubmit} >
                <input
                    className='input'
                    type="text"
                    value={employeeName}
                    onChange={handleAddEmployeeChange}
                    placeholder="Ingrese nombre"
                />
                <button
                    className='button is-success'
                    type="submit">
                    <span>Agregar empleade</span>
                    <span className='icon is-small'>
                        <i className='fas fa-plus' />
                    </span></button>

            </form>
        </div>
    )
}

export default Form;