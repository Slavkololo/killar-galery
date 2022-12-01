import React from 'react';

const Select = ({sortOptions, onChange, defaultValue, selected}) => {   

    return (
        <select
            value={selected}
            onChange={event => onChange(event.target.value)}
        >
            <option value="">{defaultValue}</option>
            {[...sortOptions].map(name => 
                <option value={name} key={name}>
                    {name}
                </option>
                )}
        </select>
    );
};

export default Select;