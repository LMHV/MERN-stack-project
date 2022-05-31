import React from 'react'
import './Input.css'


const Input = ({text}) => {
  return (
    <div className='wrapper'>
        <div className='input-data'>
            <input type='text' required></input>
            <div className='underline'></div>
            <label>{text}</label>
        </div>
    </div>
  )
}

export default Input