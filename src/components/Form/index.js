import React from 'react';
import './index.css';
import Dropdown from '../Dropdown';

const Form = (props) => {
    const {
        employeeName,
        handleAddEmployeeSubmit,
        handleAddEmployeeChange,
        sectors,
        selectedSector,
        onSelectSector,
        onRemoveSelectedSector
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
                    type="submit">Agregar empleade</button>

            </form>
            <Dropdown
                sectors={sectors}
                selectedSector={selectedSector}
                onSelectSector={onSelectSector}
                onRemoveSelectedSector={onRemoveSelectedSector}
            />
        </div>
    )
}

export default Form;