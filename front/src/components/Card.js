import React from 'react'
import './Card.css'

const Card = ({ item }) => {


  return (
    <div className='card'>
        <img className='card--photo' src={item.photo} alt='example' />
        <p className='card--description'>{item.description}</p>
        <p className='card--price'><span className='bold'>{item.price}usd</span> / person</p>
        <h1 className='card--location'>{item.destination}</h1>
    </div>
  )
}

export default Card