import React from 'react';
import './index.css';
import List from '../List';
import Input from '../Input';
import SearchButton from '../SearchButton';
const Main = (props) => {
    console.log(props, 'Estoy en Main')
    const {
        data
    } = props;

    return (
        <main className='App-Main'>
            <h1>Lista de empleados</h1>
            <div className='App-inputDiv'>
                <Input />
                <SearchButton />
            </div>
            <List data={data} />
        </main>
    )
}

export default Main;