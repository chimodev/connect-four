import React from 'react'

function Scoreboard(props) {
  return (
    <header>
        <div className='red-score'>
            <h3>Red</h3>
            <h2>{props.red}</h2>
        </div>
        <div className='winner'>
            <h3>It's <h3 className={props.turn ? "yellow-clr" : "red-clr"}>{props.turn ? "yellow" : "red"}'s</h3> turn</h3>
        </div>
        <div className='yellow-score'>
            <h3>Yellow</h3>
            <h2>{props.yellow}</h2>
        </div>
    </header>
  )
}

export default Scoreboard