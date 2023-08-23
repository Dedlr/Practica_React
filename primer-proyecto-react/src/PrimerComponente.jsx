/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './styles/PrimerComponente.css'
import PropTypes from 'prop-types'

const string = 'Esto es un texto';
const number=1233435;
const array=['curso de ract','Youtube',1,577];
const boolean =true;
const funcion = ()=>1+8;
const objeto={nombre:'Diana',edad:23}
const fecha= new Date();

    
export const PrimerComponente = ({titulo,subtitulo}) => {
  return (
    <>
      <h1>Titulo:  {titulo}</h1>
      <h1>Subtitulo:  {subtitulo+1}</h1>
    </>
  )
}

//Propiedades de los Props
PrimerComponente.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo:PropTypes.number.isRequired
}

