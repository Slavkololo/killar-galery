import React from 'react';

const Select = ({sortOptions, onChange, value, selected}) => {   

    return (
        <select
            value={selected}
            onChange={event => onChange(event.target.value)}
        >
            {[...sortOptions].map(name => 
                <option value={name} key={name}>
                    {name}
                </option>
                )}
        </select>
    );
};

export default Select;