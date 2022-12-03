import React from 'react'

function Token(props) {
  return (
    <button onClick={props.onClick} className={`token ${props.value}`}>
    </button>
  )
}

export default Token