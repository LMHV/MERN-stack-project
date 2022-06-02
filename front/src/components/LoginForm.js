import React, { useState } from 'react'
import './LoginForm.css'
import axios from 'axios'
import Input from './Input'

const LoginForm = () => {

    const handleSubmit = async (event) => {
        event.preventDefault()

        const email = event.target[0].value
        const password = event.target[1].value
        
        try {
            const response = await axios.post('http://localhost:4000/api/users/find',
            {
                email: email,
                password: password,
            });
            const label = document.getElementById("responseLabel");
            label.textContent = response.data.status
            //label = response.status

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div id="containerLogin">
            <svg id="rectangle" width="979" height="464" viewBox="0 0 979 464" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_42_5)">
                    <path d="M4 0H975L834.587 456L74.2066 384.262L4 0Z" fill="#FF9C40" fill-opacity="0.76" shape-rendering="crispEdges" />
                </g>
                <defs>
                    <filter id="filter0_d_42_5" x="0" y="0" width="979" height="464" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_42_5" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_42_5" result="shape" />
                    </filter>
                </defs>
            </svg>
            <div id="formContainer">
                <form class="form" onSubmit={handleSubmit}>
                    <Input id='inputEmail' text={'Email'}/>
                    <Input id='inputContraseña' text={'Contraseña'}/>
                <label id="responseLabel"></label>
                    <div>
                        <button type="submit" class="bg-slate-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded shadow-lg">LOG IN</button>
                        <a class="text-white pl-5 underline" href="/register">Register now</a>
                    </div>
                </form>
                <div id="iconUser">
                    <svg width="100" height="100" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M135 75C135 90.913 128.679 106.174 117.426 117.426C106.174 128.679 90.913 135 75 135C59.087 135 43.8258 128.679 32.5736 117.426C21.3214 106.174 15 90.913 15 75C15 59.087 21.3214 43.8258 32.5736 32.5736C43.8258 21.3214 59.087 15 75 15C90.913 15 106.174 21.3214 117.426 32.5736C128.679 43.8258 135 59.087 135 75ZM90 52.5C90 56.4782 88.4196 60.2936 85.6066 63.1066C82.7935 65.9196 78.9782 67.5 75 67.5C71.0217 67.5 67.2064 65.9196 64.3934 63.1066C61.5803 60.2936 60 56.4782 60 52.5C60 48.5218 61.5803 44.7064 64.3934 41.8934C67.2064 39.0804 71.0217 37.5 75 37.5C78.9782 37.5 82.7935 39.0804 85.6066 41.8934C88.4196 44.7064 90 48.5218 90 52.5ZM75 82.5C67.8195 82.4986 60.7896 84.5587 54.7456 88.4355C48.7017 92.3124 43.8978 97.843 40.905 104.37C45.1251 109.279 50.357 113.218 56.2421 115.916C62.1271 118.614 68.526 120.007 75 120C81.474 120.007 87.8729 118.614 93.7579 115.916C99.643 113.218 104.875 109.279 109.095 104.37C106.102 97.843 101.298 92.3124 95.2544 88.4355C89.2104 84.5587 82.1805 82.4986 75 82.5Z" fill="#969696" />
                    </svg>

                    <h1 class="bold text-white">WELCOME BACK!</h1>
                </div>
            </div>
        </div>
    )
}

export default LoginForm