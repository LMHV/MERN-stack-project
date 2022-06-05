import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import '../components/LoggedPage.css'
import axios from 'axios'
import Card from '../components/Card'
import Package from '../components/Package'


const LoggedPage = () => {

    const [offerCards, setOfferCards] = useState({ cards: [] });
    const [packages, setPackages] = useState({ packages: [] })

    useEffect(() => {
            axios.get('http://localhost:4000/api/cards/offer')
              .then(res => {
                setOfferCards({ cards: res.data })
              })
              .catch(error => console.log(error));

        axios.get('http://localhost:4000/api/packages/offer')
            .then(res => {
                setPackages({ packages: res.data })
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <Navbar text='HomePage' location='/' />

            <div className='first-container'>
                <svg id='first-container-svg' width="1920" height="320" viewBox="0 0 1920 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H1920L1789 173.5L192 320L0 0Z" fill="#FFA958" />
                </svg>
                <div id='first-container-text'>
                    <h1 id='first-container-title'>Ofertas FlyingBy</h1>
                    <p id='first-container-p'>Contenido especial para vos, sabemos lo que te gusta</p>
                </div>
            </div>

            <div className='second-container'>
                <div className='destinos'>
                    <h1 id='se-co-title'>Destinos Imbatibles</h1>
                    <div id='se-co-cuadro'>
                        <p id='se-co-text'>¿Sabias que si compras tu vuelo y alojamiento juntos, tenes un descuento?</p>
                    </div>
                    <h1 id='se-co-offer'>50% OFF</h1>
                    <p id='se-co-description'> En todos los destinos que te mostramos aca</p>
                </div>
                <div className='card-offers'>
                    {offerCards.cards.map(item => (<Card item={item} />))}
                </div>
            </div>

            <div className='third-container'>

            </div>

            <div className='fourth-container'>

            </div>

            <div className='fifth-container'>

            </div>

            <div className='last-container'>

            </div>
        </div>
    )
}

export default LoggedPage