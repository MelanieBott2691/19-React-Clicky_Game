import React from 'react'
import './Scoreboard.css'

const Scoreboard = props => (
  <div className='gameScore'>
    <h3 className='score'>Your Score: {props.total}</h3>
    <h3 className='status'>{props.status}</h3>
  </div>
)

export default Scoreboard
