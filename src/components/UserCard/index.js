import React from 'react';
import './index.css';
import Buttons from '../Buttons';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Card } from "react-bulma-components";
const UserCard = (props) => {
    const {
        employeeData,
        handleEmployeeOTM
    } = props;

    return (
        <Card className='App-UserCard'>
            <div className='card-content'>
                <div className='media'>
                    <div className='media-left UserCard-Data'>
                        <figure className='image is-64x64'>
                            <img src={employeeData.avatar} alt="img" />
                        </figure>

                        <div className='media-content'>
                            <h1>{employeeData.name}</h1>
                            <p>{employeeData.sector}</p>

                        </div>
                    </div>

                    <Buttons id={employeeData.id} handleEmployeeOTM={handleEmployeeOTM} />
                </div>

            </div>
        </Card>
    )
}

export default UserCard;