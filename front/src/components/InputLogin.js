import React from 'react'
import './InputLogin.css'


const InputLogin = ({ icon, text }) => {


    return (
        <div class="relative">
            <span class="z-10 text-slate-400 absolute w-5 pl-3 py-2">
                <i class="material-icons">{icon}</i>
            </span>
            <input type="text" id={text} class="mb-0 pl-9 text-sm  rounded-md border-b py-2 focus:outline-none focus:border-orange-500 focus:border-b-2 transition-all duration-200 shadow-lg peer" autocomplete="off"></input>
            <label for={text} class="m-0 ml-5 pl-5 text-xs absolute left-0 top-2 cursor-text peer-focus:text-sm peer-focus:-top-6 peer-focus:text-orange-500 transition-all duration-200">{text}</label>
        </div>
    )
}

export default InputLogin