import { useEffect,useState } from 'react'

export const UserList = ({endPoint}) => {

const [data,setData]=useState([])

const fetchData=async()=>{ //Pedir los usuarios a la api
    try{
        const response=await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
        const data= await response.json()
        setData(data)
    }catch(error){
        console.error(error)
    }
}
   useEffect (()=>{
    fetchData()
   },[endPoint])

  return (
    <> 
    <ul>
    {endPoint == 'users' ? data.map(item => <li key={item.id}> Nombre: {item.name} Email: {item.email}</li>)
                         : data.map(item => <li key={item.id}> Body: {item.body} </li>)}
    </ul>
    </>
  )
}
