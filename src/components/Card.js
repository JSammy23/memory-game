import React from 'react'

const Card = (props) => {
    
    const title = props.title;
    

  return (
    <div className='card'>
        <div className="card-img">

        </div>
        <h2 className='title'>{title}</h2>
    </div>
  )
}

export default Card