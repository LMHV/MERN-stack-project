import React, { useState } from 'react'
import './Search.css'
import InputLogo from './InputLogo.js'
import Input from './Input'

export default function Search() {

    const [state, setState] = useState(
        {
            origen: '',
            destino: '',
            fechaSalida: '',
            fechaRetorno: '',
            cantPasajeros: 0,
        }
    );

    const searchFlight = () => {
        let inputOrigen = document.getElementById('origen').value;
        let inputDestino = document.getElementById('destino').value;
        let inputFechaSalida = document.getElementById('fechaSalida').value;
        let inputFechaRetorno = document.getElementById('fechaRetorno').value;
        let inputCantPasajeros = document.getElementById('cantPasajeros').value;


        setState({
            origen: inputOrigen,
            destino: inputDestino,
            fechaSalida: inputFechaSalida,
            fechaRetorno: inputFechaRetorno,
            cantPasajeros: inputCantPasajeros
        })

    }




    return (
        <div id="search">
            <div id="container">
                <h3>Vuelos</h3>
                <div id='search-inputs' class='items-center'>
                    <Input id='origen' text={'Origen'}/>
                    <Input id='destino' text={'Destino'}/>
                    <Input id='fechaSalida' text={'Fecha Salida'}/>
                    <Input id='fechaRetorno' text={'Fecha Regreso'}/>
                    <Input id='cantPasajeros' text={'Pasajeros'}/>
                    <div class="button">
                        <span class="z-10 text-black absolute w-5 pl-3 py-2">
                            <i class="material-icons">search</i>
                        </span>
                        <button onClick={searchFlight} class="bg-orange-400 hover:bg-white text-black font-bold py-2 px-4 rounded shadow pl-10">Buscar</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
