import React from 'react'
import './InputLogo.css'

const InputLogo = ({ icon, text }) => {


    return (
        <div class="relative">
            <span class="z-10 text-slate-400 absolute w-5 pl-3 py-2">
                <i class="material-icons">{icon}</i>
            </span>
            <input type="text" id={text} class="mb-0 pl-9 text-sm  rounded-md border-b py-2 focus:outline-none focus:border-orange-500 focus:border-b-2 transition-all duration-200 shadow-lg peer" autocomplete="off"></input>
            <label for={text} class="m-0 ml-5 pl-5 text-xs absolute left-0 top-2 cursor-text peer-focus:text-sm peer-focus:-top-6 peer-focus:text-orange-500 transition-all duration-200">{text}</label>
        </div>
    );

/*
    let sizePlaceholder = `w-24 sm:w-48 md:w-64 lg:w-80 xl:w-96 px-3 py-3 placeholder-slate-300 text-slate-600 rounded text-sm border-0 shadow-lg outline-none focus:outline-none focus:ring  pl-10`
         w-24 sm:w-48 md:w-64 lg:w-80 xl:w-96
    return (
        <div class="inputlogo">
            <span class="z-10 text-slate-500 absolute w-5 pl-3 py-3">
                <i class="material-icons">{icon}</i>
            </span>
            <input type="text" placeholder={text} class={sizePlaceholder}/>
        </div>
    )
    */
}

export default InputLogo
