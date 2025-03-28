import React from 'react'
import { Tarjeta } from './Tarjeta'

//importar imagenes y les asignamos un objeto
import MarioImage from './imagenes/Mario.png'
import LuigiImage from ',/imagenes/Luigi.png'
import PeachImage from ',/imagenes/Peach.png'

export function App() {
  return (
    <div>
        <div>Personajes de Mario Bros</div>
        <Tarjeta nombre="Mario" colorFavorito="Rojo" image={MarioImage}/>
        <Tarjeta nombre="Luigi" colorFavorito="Verde" image={LuigiImage}/>
        <Tarjeta nombre="Peach" colorFavorito="Rosa" image={PeachImage}/>
    </div>
  )
}
