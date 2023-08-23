/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import './styles/PrimerComponente.css'
import { useState } from 'react'



export const ContadorApp = ({ value }) => {

  const [contador,setContador]= useState(value);

  const handleClick = () => {
    setContador(contador+1);
  }

  return (
    <div>
      <h1>Contador APP</h1>
      <h1>{contador}</h1>
        <button onClick={handleClick}>CLICK</button>
    </div>
  )
}


