import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Card from '../components/Card'
import Package from '../components/Package'
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import Ads1 from '../components/Ads1'
import '../App.css'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

const LandingPage = () => {

  // This is the way of saving the userContext, also can be saved the setState function to modify user.
  //const { user } = useContext( UserContext )

  const [cards, setCards] = useState({ cards: [] });
  const [packages, setPackages] = useState({ packages: [] })

  useEffect(() => {
    axios.get('http://localhost:4000/api/cards')
      .then(res => {
        setCards({ cards: res.data })
      })
      .catch(error => console.log(error));

    axios.get('http://localhost:4000/api/packages')
      .then(res => {
        setPackages({ packages: res.data })
      })
      .catch(error => console.log(error))
  }, [])

  /*useEffect(() => {
    console.log(cards)
  }, [cards])
  */
  return (
    <div>

      <Navbar text="Log In" location="/login" />
      <Search />
      <Ads1 />

      <h2 id="title-cards" class="subtitle">Top destinos mas buscados en Argentina</h2>
      <div id="card-section">
        {cards.cards.map(item => (<Card item={item} />))}
      </div>

      <div className='container-img'>
        <img id="middleimg" alt="middleimg" src={require("../images/middleimg.png")} />
      </div>

      <h2 class="subtitle">Paquetes armados por nosotros</h2>
      <section id="package-section">
        {console.log(packages)}
        {packages.packages.map(item => <Package item={item} />)}
      </section>

      <hr />

      <AboutUs />
      <Footer />
    </div>
  )
}

export default LandingPage
