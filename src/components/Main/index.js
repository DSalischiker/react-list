import React from 'react';
import './index.css';
import List from '../List';
import Input from '../Input';
const Main = (props) => {
    console.log(props, 'Estoy en Main')
    const {
        data
    } = props;

    return (
        <main className='App-Main'>
            <Input />
            <List data={data} />
        </main>
    )
}

export default Main;