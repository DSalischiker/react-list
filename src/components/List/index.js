import React from 'react';
import './index.css';
import UserCard from '../UserCard';
const List = (props) => {
    const {
        data
    } = props;
    console.log(props, 'Estoy en List');
    return (
        <ul className='App-List'>

            <UserCard name={data[0].name} position={data[0].position} />
            <UserCard name={data[1].name} position={data[1].position} />
            <UserCard name={data[2].name} position={data[2].position} />
            <UserCard name={data[3].name} position={data[3].position} />

        </ul>
    )
}

export default List;