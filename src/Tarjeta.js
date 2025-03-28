import React from 'react'

export function Tarjeta( props ) {
  return (
    <div>
      <div>Nombre del Personaje: {props.nombre}</div>
      <div>color Favorito: {props.coloFavorito}</div>
    </div>
  )
}
