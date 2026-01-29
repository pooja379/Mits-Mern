import React,{useCallback, useState} from 'react'
import Header from '../component/Header'

const UseCallBack = () => {
    const[count,setCount]=useState(0)
    const Newfun=useCallback(()=>
    {

    },[count]);
  return (
    <div>
    <Header Newfun={Newfun}/>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>count</button>
    </div>
  )
}

export default UseCallBack
