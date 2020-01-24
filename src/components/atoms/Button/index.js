import React from 'react';

const Button = ({title, onClick, loading}) => {
    if (loading){
        return <button className="login-button disable">Loading</button>
    }
    return (
        <button onClick={onClick} className="login-button">{title}</button>
    )
}


export default Button;