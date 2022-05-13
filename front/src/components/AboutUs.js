import React from 'react'
import './AboutUs.css'

const AboutUs = () => {


  return (
    <div id="aboutContainer">
        <div id="aboutPart">
            <p class="aboutItem"><span class="bold">Canales de Atención</span></p>
            <ul>
                <li><p class="aboutItem">0800-555-0505</p></li>
                <li><a href="#" class="aboutItem">consultasflyingby@flyby.com</a></li>
            </ul>
        </div>
        <div id="aboutPart">
            <p class="aboutItem"><span class="bold">Somos FlyingBy</span></p>
            <ul>
                <li><a href="#" class="aboutItem">Preguntas Frecuentes</a></li>
                <li><a href="#" class="aboutItem">Trabajá en FlyingBy</a></li>
                <li><a href="#" class="aboutItem">Relacion con Inversores</a></li>
                <li><a href="#" class="aboutItem">Sobre FlyingBy</a></li>
                <li><p class="aboutItem">Domicilio: Av. 9 de Julio 2022 CABA, Arg</p></li>
            </ul>
        </div>
        <div id="aboutPart">
            <p class="aboutItem"><span class="bold">Confianza en tus compras</span></p>
            <ul>
                <li><a href="#" class="aboutItem">Terminos y condiciones de compra de todos nuestros servicios</a></li>
                <li><a href="#" class="aboutItem">Politica de privacidad</a></li>
                <li><a href="#" class="aboutItem">Promociones vigentes</a></li>
                <li><a href="#" class="aboutItem">Ofertas</a></li>
                <li><a href="#" class="aboutItem">Cyber Monday</a></li>
            </ul>
        </div>
        <div id="aboutPart">
            <p class="aboutItem"><span class="bold">Potenciá tu negocio</span></p>
            <ul>
                <li><a href="#" class="aboutItem">Sumá tu flota</a></li>
                <li><a href="#" class="aboutItem">Programa de Agencias afiliadas</a></li>
                <li><a href="#" class="aboutItem">Sé parte de la red de afiliados.</a></li>
            </ul>
        </div>
    </div>
  )
}

export default AboutUs