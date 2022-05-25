import React from 'react'
import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import RegisterForm from '../components/RegisterForm';

const Register = () => {



  return (
    <div>
        <Navbar text="Home" location="/"/>
        <RegisterForm/>
        <AboutUs/>
        <Footer/>
    </div>
  )
}

export default Register