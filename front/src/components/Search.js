import React from 'react'
import './Search.css'
import Input from './Input'
import axios from 'axios'

export default function Search() {

    const handleSubmit = async (event) => {
        event.preventDefault()

        const origen = event.target[0].value
        const destino = event.target[1].value
        const fechaSalida = event.target[2].value
        const fechaRegreso = event.target[3].value
        const cantPasajeros = event.target[4].value


        try {
            const response = await axios.post("http://localhost:4000/api/flights",
                {
                    origen: origen,
                    destino: destino,
                    fechaSalida: fechaSalida,
                    fechaRegreso: fechaRegreso,
                    cantPasajeros: cantPasajeros
                });
            const label = document.getElementById("responseLabel");
            label.textContent = response.data.status
            //label = response.status
        } catch (error) {
            console.log(error)
        }
    }




    return (
        <div id="search">
            <div id="container">
                <h3>Vuelos</h3>
                <form class='form' onSubmit={handleSubmit}>
                    <div id='search-inputs' class='items-center'>
                        <Input id='origen' text={'Origen'} />
                        <Input id='destino' text={'Destino'} />
                        <Input id='fechaSalida' text={'Fecha Salida'} />
                        <Input id='fechaRetorno' text={'Fecha Regreso'} />
                        <Input id='cantPasajeros' text={'Pasajeros'} />
                        <div class="button">
                            <span class="z-10 text-black absolute w-5 pl-3 py-2">
                                <i class="material-icons">search</i>
                            </span>
                            <button type='submit' class="bg-orange-400 hover:bg-white text-black font-bold py-2 px-4 rounded shadow pl-10">Buscar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
