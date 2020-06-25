import React from 'react';
import './index.css';
import List from '../List';
import Input from '../Input';
import SearchButton from '../SearchButton';
const Main = (props) => {
    console.log(props, 'Estoy en Main')
    const {
        employeeData,
        handleEmployeeOTM,
        employeeOTM
    } = props;

    return (
        <main className='App-Main'>
            <h1>Lista de empleados</h1>
            <div className='App-inputDiv'>
                <Input />
                <SearchButton />
            </div>
            <List employeeData={employeeData} handleEmployeeOTM={handleEmployeeOTM} employeeOTM={employeeOTM} />
        </main>
    )
}

export default Main;