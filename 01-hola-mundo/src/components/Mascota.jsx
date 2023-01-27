import React from 'react'
import { Edad } from './Edad'
import '../App.css';

const Mascota = ( {name, age, show}) => {
  return (
    <>
        <h3 className="Mascota"> Soy una mascota: {name} </h3>
        <Edad edad={age} show={show}/>
    </>
  )
}

export default Mascota
