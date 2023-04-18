import React, {useState} from "react";
const UseStateHook = () =>{
    const [count , setCount] = useState(0);

    function decrementCount (){
        setCount(preCount =>preCount-1);
    }

    function incrementCount (){
            setCount(preCount =>preCount+1)
    }
    return(<>
        <div>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    </>)
}

export default UseStateHook;
