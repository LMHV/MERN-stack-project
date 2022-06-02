import React from 'react'
import ReactDOM from 'react-dom'
import './Navbar.css'

export default function Navbar({ text, location }) {


    return (
        <div id="nav" className='shadow-md w-full top-0 left-0'>
            <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center text-white'>
                   <a href='/'>FlyingBy</a>
                </div>

                <ul className='md:flex md:items-center'>
                    <li className='md:ml-8 text-xl flex flex'>
                        <a href="#title-cards" className='text-neutral-900 hover:text-orange-700'>Places</a>
                    </li>
                    <li className='md:ml-8 text-xl'>
                        <a href="#package-section" className='text-neutral-900 hover:text-orange-700'>Packages</a>
                    </li>
                    <li className='md:ml-8 text-xl'>
                        <a href="#footerContainer" className='text-neutral-900 hover:text-orange-700'>About us</a>
                    </li>

                    <a href={location}>
                        <button type="button" className='bg-gray-300 text-black font-bold py-1 px-6 rounded md:ml-8 hover:bg-orange-600 hover:text-black'>
                            {text}
                        </button>
                    </a>



                </ul>


            </div>
        </div>
    );
}