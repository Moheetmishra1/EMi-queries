// import React,{useMemo,useState} from "react"

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";

// const main=()=>{
//   let [count,setCount] = useState(0)
//   let [todo,setTodos]=useState([])
//   let calculation = useMemo(()=>expensiveCalculation(count),[count])

//   //Inmcrement function

//   let Increment =()=>{
//     // setCount(cout+1)
//     // setCount(cout+10)

//     setCount((count)=>count+1)
//   }

//   let addTodo = ()=>{
//     setTodos((t)=>[...t,"New Data"])
//   }

//   return (
//     <div>
//      <h1> My Todo Application</h1>
//      {todo.map((todos,index)=>{
//       return (
//         <>
//         <p key={index}>{todos}</p>
//         </>
//       )
//      })}

//      <button onClick={addTodo}>Add Todo</button>

//      <hr />
//      <h1>{count}</h1>
//      <button onClick={Increment}>Increment</button>
//      <h1>Calculation</h1>
//      <h1>{calculation}</h1>
     
//     </div>
//   )

// }

// let expensiveCalculation = (run)=>{
//   console.log("calculating...........data");
//   for(let i=0;i<1000000; ++i){
//     num = num +1;
//   }
//   return num;
// }

// export default main


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <App />
  </>
 
)




