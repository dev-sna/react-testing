import React from 'react';
import './Button.css'

const Button = ({ title, type }) => {
    return(
        <button type={type} className="button">
            {title}
        </button>
    )
}

export default Button;