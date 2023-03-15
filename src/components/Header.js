import React from 'react'

function Header(props) {

  return (
    <header>
        <h1>Bikini Bottom Memory Game</h1>
        <div>
            <h2>Score: {props.score}</h2>
            <h2>Best Score: {props.bestScore}</h2>
        </div>
    </header>
  )
}

export default Header