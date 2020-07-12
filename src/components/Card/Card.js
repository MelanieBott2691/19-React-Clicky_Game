import React from 'react'
import './Card.css'

const Card = props => (
  <div className='card img-container hover'>
    <div className='img-container'>
      <img
        alt={props.name}
        src={props.image}
        id={props.id}
        onClick={() => props.shuffleScoreCard(props.id)}
        className='shuffleScore'
        width='auto'
        text-align='center'
      />
      <div className='overlay'></div>
    </div>
  </div>
)

export default Card
