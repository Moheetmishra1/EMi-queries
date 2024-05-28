import React, { useRef, useState } from "react"
import "./QuestionAnswer.css"


 function QuestionAnswer({question,answer}){
    let [isRead,setIsRead] = useState(false)
    let ans=useRef(0)
    let i=useRef(0)

    function add(){
        if(!isRead){
            i.current.style.transform="rotate(180deg)";
            ans.current.style.display="block";
        }else{
            i.current.style.transform="rotate(0deg)";
            ans.current.style.display="none";       
        }
        setIsRead(!isRead);
    }

    return (
        <div className="section">
            <div className="question" onClick={add}>{question} <p ref={i} id="icon">^</p></div>
            <div className="answer" ref={ans}>{answer}</div>   
        </div>
    )
}



export default React.memo(QuestionAnswer)