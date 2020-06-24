import React from 'react';
import './index.css';
import Buttons from '../Buttons';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Card } from "react-bulma-components";
const UserCard = (props) => {
    const {
        name, position
    } = props;
    return (
        <Card className='App-UserCard'>
            <div className='card-content'>
                <div className='media'>
                    <div className='media-left UserCard-Data'>
                        <figure className='image is-64x64'>
                            <img src={require('./diego.png')} alt="img" />
                        </figure>

                        <div className='media-content'>
                            <h1>{name}</h1>
                            <p>{position}</p>

                        </div>
                    </div>

                    <Buttons />
                </div>

            </div>
        </Card>
    )
}

export default UserCard;