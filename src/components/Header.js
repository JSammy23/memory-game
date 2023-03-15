import React from 'react'

function Header(props) {

  return (
    <header>
        <div>
            <h1>Bikini Bottom Memory Game</h1>
            <p className='info'>Gain points by clicking on a character but don't click the same one twice or the game is over!</p>
        </div>
        <div>
            <h2>Score: {props.score}</h2>
            <h2>Best Score: {props.bestScore}</h2>
        </div>
    </header>
  )
}

export default Header