import React from 'react';
import './index.css';
import List from '../List';
import Form from '../Form';

const Main = (props) => {
    const {
        employeeData,
        handleAddEmployeeChange,
        handleAddEmployeeSubmit,
        handleDeleteEmployee,
        handleEmployeeOTM,
        employeeOTM,
        handleEditEmployee
    } = props;

    return (
        <main className='App-Main'>
            <div className='App-inputDiv'>
                <Form
                    handleAddEmployeeChange={handleAddEmployeeChange}
                    handleAddEmployeeSubmit={handleAddEmployeeSubmit}

                />
            </div>
            <List
                employeeData={employeeData}
                handleDeleteEmployee={handleDeleteEmployee}
                handleEmployeeOTM={handleEmployeeOTM}
                employeeOTM={employeeOTM}
                handleEditEmployee={handleEditEmployee}
            />
        </main>
    )
}

export default Main;