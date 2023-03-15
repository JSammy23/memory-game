import React from 'react'

const Card = ({ title, image, shuffleCards }) => {
    
    const handleClick = () => {
      shuffleCards();
    };

  return (
    <div className='card' onClick={handleClick}>
        <img src={image} alt="Character" className='card-img' />
        <h2 className='title'>{title}</h2>
    </div>
  )
}

export default Card