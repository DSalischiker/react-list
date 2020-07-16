import React from 'react';
import './index.css';
import Buttons from '../Buttons';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Card } from "react-bulma-components";
const UserCard = (props) => {
    const {
        employeeData,
        handleDeleteEmployee,
        handleEmployeeOTM,
        employeeOTM,
        handleEditEmployee
    } = props;

    const isMonthEmployee = employeeOTM === employeeData.id;
    return (
        <Card className={`App-UserCard ${isMonthEmployee ? 'bg-yellow' : ''}`}>
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

                    <Buttons
                        id={employeeData.id}
                        handleDeleteEmployee={handleDeleteEmployee}
                        handleEmployeeOTM={handleEmployeeOTM}
                        isMonthEmployee={isMonthEmployee}
                        handleEditEmployee={handleEditEmployee}
                    />
                </div>

            </div>
        </Card>
    )
}

export default UserCard;