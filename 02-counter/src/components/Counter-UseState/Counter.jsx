import { ButtonReset } from "./ButtonReset";
import { ButtonApp } from "./ButtonApp";
import { useState } from "react";

export const Counter = ({initialValue = 0}) => {
console.log('Counter APP');
const [number, setnumber] = useState( initialValue );

const increaseCounter = () =>{
        setnumber( number +1 );
      //  console.log("+1", number);
        console.log("Incrementa el número");
    }

const decreaseCounter = () =>{
        setnumber( number -1 );
      //  console.log("-1", number);
      console.log("Decrementa el número");
    }

const resetCounter = () =>{
        setnumber( initialValue );
      //  console.log("reset");
      console.log("Reset");
    }

  return (
    <>
    <h6> Counter </h6>
    <h6> {number} </h6>
    <ButtonApp onClick={increaseCounter} > + </ButtonApp>
    <ButtonApp onClick={decreaseCounter}> - </ButtonApp>
    <ButtonApp onClick={resetCounter}> Reset </ButtonApp>
    <ButtonReset fncOnClick={setnumber} initialValue={50}> Reset on 50  </ButtonReset>

 {/*   <table>
        <tr>
      <th> Incrementa </th>
      <th> Decrementa </th>
      <th> Resetea </th>
        </tr>
        <tr>
      <td><button onClick={increaseCounter}> + </button></td>
      <td><button onClick={decreaseCounter}> - </button></td>
      <td><button onClick={resetCounter}> 0 </button></td>
       </tr>
      </table>
  */}
    </>
  )
}

export default Counter
