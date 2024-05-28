import LoanAmount from "./LoanAmount";
import "./Calculator.css"
import Total from "./Total";
import { useCallback, useState } from "react";


export default function Calculator(){
    let [Loanamount,setLoanAmountState] =useState(100000);
    let [rate,setrateState] =useState(1);
    let [month,setmonthState] =useState(30);


    let setLoanAmount=useCallback( (a)=>{
        setLoanAmountState(a)
    },[Loanamount])

    let setrate=useCallback((a)=>{
        setrateState(a)
    },[rate])

    let setmonth=useCallback((a)=>{

        setmonthState(a)
    },[month]);

// console.log(Loanamount, rate, month);


        let mRate=rate/1200;
    let SI= Math.floor((( Loanamount*mRate*(1+mRate)**month)/((1+mRate)**month-1)));
    

    

    return (
        <div  className="Calculator-theme">

        <div className="calculator">   
            <div className="cal">
        <LoanAmount title="Loan Amount" val={Loanamount}   minAmount="₹ 1L" maxAmount="₹ 30cr"  Max={300000000} Min={100000} func={setLoanAmount} />
        <LoanAmount title="Illustrative Interest Rate p.a" val={rate}  minAmount="1 %" maxAmount="20 %" Max={20} Min={1}  func={setrate} />
        <LoanAmount title="Tenure ( Months      )" val={month} place={30}  minAmount="30 month" maxAmount="360 months" Max={360} Min={30} func={setmonth} />

        </div>
        <Total totalInterest={SI} />

   
     </div>
     </div>
    )

}