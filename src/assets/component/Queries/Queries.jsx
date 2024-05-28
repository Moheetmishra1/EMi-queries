
import React from "react"
import "./Queries.css"
import arr from "./QuesriesArray"
import QuestionAnswer from "./QuestionAnswer"

export default function Queries(){



    return (
        <div style={{backgroundColor:"black",height:"100vh",padding:"10px"}}>
        
        {/* <div id="eyeBox">
            <div id="eyes">
                <div className="eye"><div></div></div>
                
                <div className="eye"></div>
            </div>
        </div> */}
        {arr.map(({id,question,answer})=>{
             return (<React.Fragment key={id}>
                <QuestionAnswer question={question} answer={answer} />
                </React.Fragment>)
           
        })}
    
        </div>
    )
}