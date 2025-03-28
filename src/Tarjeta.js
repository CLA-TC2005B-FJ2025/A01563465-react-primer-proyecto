import React from 'react'

export function Tarjeta( props ) {
  return (
    <div>
      <img src={props.image} width={150} />
      <div>Nombre del Personaje: {props.nombre}</div>
      <div>color Favorito: {props.colorFavorito}</div>
    </div>
  )
}
