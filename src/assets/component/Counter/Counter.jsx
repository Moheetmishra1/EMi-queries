import { useState } from "react"

export default function Counter(){
    let [count,setCount]=useState(0);

    function updateCount(){
        setCount(count+1);
    }
    function updateCount5(){
        setCount(5);
    }


    return (
        <>
        <h1>Counter :{count}</h1>
        <button onClick={updateCount}>Update</button>
        <button onClick={updateCount5}>Update5</button>

        </>
    )
}