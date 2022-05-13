import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Card from '../components/Card'
import data from '../mock/data.js'
import Package from '../components/Package'
import packages from '../mock/packages.js'
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import Ads1 from '../components/Ads1'
import '../App.css'
import { UserContext } from '../context/UserContext'

const LandingPage = () => {

  // This is the way of saving the userContext, also can be saved the setState function to modify user.
  const { state } = useContext( UserContext )

  return (
    <div>

        <Navbar text="Log In" location="/login" />
        <Search />
        <Ads1 />

        <h2 id="title-cards" class="subtitle">Top destinos mas buscados en Argentina</h2>
        <div id="card-section">
          {data.map(item => (<Card item={item} />))}
        </div>

        <div className='container-img'>
          <img id="middleimg" alt="middleimg" src={require("../images/middleimg.png")} />
        </div>

        <h2 class="subtitle">Paquetes armados por nosotros</h2>
        <section id="package-section">
          {packages.map(item => <Package item={item} />)}
        </section>

        <hr />

        <AboutUs />
        <Footer />
    </div>
  )
}

export default LandingPage
