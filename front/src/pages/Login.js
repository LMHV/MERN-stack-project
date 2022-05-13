import React from 'react'
import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

const Login = () => {



  return (
    <div>
        <Navbar text="Home" location="/"/>
        <LoginForm/>
        <AboutUs/>
        <Footer/>
    </div>
  )
}

export default Login