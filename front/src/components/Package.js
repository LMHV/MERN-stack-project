import React from 'react'
import './Package.css'

const Package = ({item}) => {


  return (
    <div className='package'>

        <div id='options' class="text-xs sm:text-xs md:xs lg:text-sm xl:text-base">
            <h1 id='option' class="text-xs sm:text-sm md:text-base lg:text-xl">Opción {item.option}</h1>

            <p>Incluye:</p>

            <h3 className='options--country'>- {item.firstDestination}</h3>
            <h3 className='options--country'>- {item.secondDestination}</h3>
            <h3 className='options--country'>- {item.thirdDestination}</h3>
            <h3 className='options--country'>- {item.fourthDestination}</h3>
        </div>

        <div className='vl'/>

        <div className='description'>
            <p id='description--title' class="text-xs sm:text-sm md:text-base lg:text-xl">Descripción:</p>
            <p id='description--text' class="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm">{item.description}</p>
            <p id='description--price' class="text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base"><span className='bold'>{item.price}usd</span> / Persona</p>
        </div>

        <div className='photos'>
          <img alt="exp1" className='topleft' src={item.photoURLFirstDestination}/>
          <img alt="exp2" className='topright' src={item.photoURLSecondDestination}/>
          <img alt="exp3" className='botleft' src={item.photoURLThirdDestination}/>
          <img alt="exp4" className='botright' src={item.photoURLFourthDestination}/>
        </div>

    </div>
  )
}

export default Package