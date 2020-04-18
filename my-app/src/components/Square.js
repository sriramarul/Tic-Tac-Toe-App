import React from 'react';

const style = {
    background: '#2196F3',
    border: '2px solid black',
    fontSize: '40px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};

const Square = ({ value, onClick }) => (
    <button className="button" style={style} onClick={onClick}>
        {value}
    </button>
);

export default Square;