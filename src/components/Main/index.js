import React from 'react';
import './index.css';
import List from '../List';
import Form from '../Form';

const Main = (props) => {
    console.log(props, 'Estoy en Main')
    const {
        employeeData,
        handleAddEmployeeChange,
        handleAddEmployeeSubmit,
        handleDeleteEmployee,
        handleEmployeeOTM,
        employeeOTM
    } = props;

    return (
        <main className='App-Main'>
            <h1>Lista de empleades</h1>
            <div className='App-inputDiv'>
                <Form handleAddEmployeeChange={handleAddEmployeeChange} handleAddEmployeeSubmit={handleAddEmployeeSubmit} />
            </div>
            <List employeeData={employeeData} handleDeleteEmployee={handleDeleteEmployee} handleEmployeeOTM={handleEmployeeOTM} employeeOTM={employeeOTM} />
        </main>
    )
}

export default Main;