import React from 'react';

const Button = ({title, onClick, loading}) => {
    if (loading){
        return <button className="btn-large waves-effect waves-dark disable">Loading</button>
    }
    return (
        <button onClick={onClick} className="btn-large waves-effect waves-dark">{title}</button>
    )
}


export default Button;