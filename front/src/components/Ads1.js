import React from 'react'
import './Ads1.css'

const Ads1 = () => {


  return (
    <div id='cont' class="divide-x divide-gray-400">
        <div className='leftcont'>
            <h1 className='ad1-title'>Ingresá para conocer todas las ofertas de FlyingBy</h1>
            <div class="imgcont">
                <img className="ad1-img" src={require("../images/adphoto.jpg")} alt="ads-img"/>
            </div>
            <h1 className='old-price'>$18000</h1>
            <h1 className='offer-price'>$12999</h1>

        </div>
        <div className='rightcont'>
          <div className='rightcontainer'>
            <div className='rightcont-top'>
              <h5>Sabias que ahora podes disfrutar de...</h5>
            </div>
            <div className='rightcont-middle'>
              <h1><span className='bold'> 12 CUOTAS</span></h1>
              <h3><span className='bold'> sin interés</span></h3>
            </div>
            <div className='rightcont-bot'>
              <h5>APROVECHA!</h5>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Ads1