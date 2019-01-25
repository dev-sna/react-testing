import React from 'react';

const Field = (props) => {
    const { onChange, value, name } = props;
    return(
        <input
            required
            className='field'
            onChange={(e) => onChange(e)}
            value={value}
            name={name}
        />
    )
}

export default Field;