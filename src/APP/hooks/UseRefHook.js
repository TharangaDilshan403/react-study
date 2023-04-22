import React,{useState,useEffect,useRef} from 'react'


export  default function UseRefHook (){
    const [name,setName]= useState();
    let renderCount = useRef(0)

    useEffect(()=>{
        renderCount.current = renderCount.current + 1
    })
    return (<>
        <input onChange={e=>setName(e.target.value)}/>
        <h1>My name is {name}</h1>
        <h1>Render Count : {renderCount.current}</h1>
        </>)
}