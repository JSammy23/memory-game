import React from 'react'

export const Popup = ({ title, message, onClick }) => {
  return (
    <div className="overlay" onClick={onClick}>
        <div className='popup'>
            <h1>{title}</h1>
            <p className='info' >{message}</p>
        </div>
    </div>
  )
};
