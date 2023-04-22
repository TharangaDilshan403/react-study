import React, {useMemo, useState} from 'react'

export default function UseMemoHook () {

    const [num1 , setNum1] = useState(0);
    const [num2 , setNum2] = useState(0);

    const result = useMemo(()=>{
       return  calculation(num1,num2)
    },[num1,num2])

    return (
        <>
            <input type={"number"} placeholder={"Number One "} onChange={(e)=> {setNum1(parseInt(e.target.value))}}/>
            <input type={"number"} placeholder={"Number Two "} onChange={(e)=>{setNum2(parseInt(e.target.value))}}/>
            <button onClick={calculation}>calculate</button>
            <h1>Num1 * Num2 = {result}</h1>
        </>
    )

    function calculation(num1,num2) {
        for (let i = 0; i <= 10; i++) {
            console.log(i)
        }
        return num1* num2;
    }
}