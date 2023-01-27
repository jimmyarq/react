import React from 'react';
import  '../App'
import { Edad } from "./Edad"

export const NombreCompleto = ( props) => {
    console.log("Props", props);
  return (
    <React.Fragment> {/*React.Fragment*/}
        <h3 className="App"> Dev Name: {props.name} </h3>
        <Edad edad={props.age} show={props.show}/>
    </React.Fragment>
    );
}

// export default NombreCompleto
