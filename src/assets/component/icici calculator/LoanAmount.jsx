import { useRef ,memo} from "react"
import "./LoanAmount.css"


 function LoanAmount({title,minAmount,maxAmount,Max,Min,func,val}){
    console.log(title   );

    let amountInput=useRef(0)
    let amountRange = useRef()
      
    function changeAmountInput(e){
        amountRange.current.value=e.target.value;  
        func(Number(e.target.value))       
    }   

    function changeAmountRange(e){
        amountInput.current.value =e.target.value;
        func(Number(e.target.value))       
    }

    // console.log(title);

    return (

        <div className="temp" >
            <p className="loantext">{title}</p>
            <input type="text"  ref={amountInput} onChange={changeAmountInput} value={val} />
            <input type="range"  className="amount" ref={amountRange}  value={val}   min={Min} max={Max} onChange={changeAmountRange}/>
            
            <div className="rangeamount">
                <p> {minAmount}</p>
                <p> {maxAmount}</p>

            </div>
        </div>
    )
}

export default memo(LoanAmount)