import React from 'react'
import '../App.css'
import PropTypes from 'prop-types';

const myStyle = {
    ocultar: {
        display: "none"
    },
    mostrar:{
        display: "block",
        color: "red",
        backgroundColor: "green"
    }
}

export const Edad = ( {edad, show=true} ) => {
    return (
    <>{/* React.Fragment */}
        <p 
        className='App'
        style={ show ? myStyle.mostrar: myStyle.ocultar }
        >
        === Tiempo en la matrix: {edad} años === 
        </p>
    </>
    )
}

Edad.propTypes = {
    edad: PropTypes.number.isRequired
}

