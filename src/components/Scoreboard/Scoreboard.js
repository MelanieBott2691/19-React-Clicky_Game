import React from 'react'
import './Scoreboard.css'

//stateless component
const Scoreboard = props => (
  <div className='gameScore' align='right'>
    <h3 className='score'>Your Score: {props.total}</h3>
    <h3 className='status'>{props.status}</h3>
  </div>
)

export default Scoreboard
