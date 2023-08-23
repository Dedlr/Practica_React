/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './styles/PrimerComponente.css'
import React,{useState} from 'react'
import { AgregarTarea } from './components/AgregarTarea'


const Items=({nombre,visto})=>{
    return(
        <li>{nombre}
    {visto ? '✅' : '❌'}</li>
    )
}

function Listado() {

    const assTask=()=> {
        setArreglo([...arreglo,{nombre:'Nuevo', visto:false}])
    }



    let listadoSecciones=[
        {id: 1,nombre: 'Intalaciones necesarias', visto:true},
        {id: 2,nombre: 'Componentes', visto:true},
        {id: 3,nombre: 'Props', visto:true},
        {id: 4,nombre: 'Variables', visto:true},
        {id: 5,nombre: 'useState', visto:false},
        {id: 6,nombre: 'Hooks', visto: false},
    ]
    
    const [arreglo,setArreglo]=useState(listadoSecciones);

   const onAgregarTarea=(val)=>{
        let valor=val.trim()
       if (valor<1) return
       const envio={
            id:arreglo.length+1,
            nombre:valor,
            visto: false
       }
       setArreglo([...arreglo,envio])
    }

  return (
    <>
    <h1>Listado de Temas</h1>

    <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
    <ol>
        {arreglo.map(item => <Items key={item.id} nombre={item.nombre} visto={item.visto}> </Items>)}
    </ol>

    </>
  )
}

export default Listado
