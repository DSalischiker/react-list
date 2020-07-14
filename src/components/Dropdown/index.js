import React from 'react';
import './index.css';

const Dropdown = props => {
    const {
        sectors,
        selectedSector,
        onSelectSector,
        onRemoveSelectedSector
    } = props;
    return (
        <select name='sectors'>
            {
                sectors.map((sector) =>
                    <option key={sector} value={sector} onClick={() => onSelectSector(sector)}>{sector}</option>
                )
            }
        </select>
    )
}

export default Dropdown;