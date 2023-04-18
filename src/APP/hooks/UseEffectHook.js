import React, {useEffect, useState} from "react"


const UseEffectHook = () => {

    const [responseType, setResponseType] = useState("posts");
    const [items,setItems] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${responseType}`)
            .then((response) => response.json())
            .then((json) => setItems(json));
        //console.log(items);
    }, [responseType])
    return (
        <>
            <div>
                <button onClick={() => setResponseType('posts')}>post</button>
                <button onClick={() => setResponseType('users')}>user</button>
                <button onClick={() => setResponseType('comments')}>comments</button>
            </div>
            <h1>{responseType}</h1>
            {items.map(item =>{
                return <pre key={item.id} >{JSON.stringify(item)}</pre>
            })}
        </>
    )
}

export default UseEffectHook;