import React,{useState} from 'react'
import Service from './Service';
const Contact = (props) => {
  const[name,setName]=useState("Akkupalli pooja");
  const toggleName=()=>
  {
    setName(name==="Akkupalli pooja"?"pooja":"Akkupalli pooja");
  }
  return (
    <div>
      <h1>Name:{name}</h1>
      <button onClick={toggleName}>Toggle</button>
      {/* <Service name={props.name}/> */}
    </div>
  )
}

export default Contact
