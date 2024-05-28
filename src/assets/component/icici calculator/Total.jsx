import { memo } from "react"
import "./Total.css"

 function Total({totalInterest}){
    console.log("Total");


    return (
        <>
        <div className="TotalBox" >
            <div  className="TotalElement">
                <p>Monthly EMI</p>
                <p id="totalCharge">₹ {totalInterest} </p>
                <p id="AnnualEMI">Annual EMI</p>
                <p id="AnnualCharge">₹ {totalInterest*12} </p>


            </div>
            <div id="menu">
                <button id="applyForHomeLoan">Apply for home loan</button>
                <button id="GetACall">Get a call</button>
            </div>
        </div>
        </>
    )

}

export default memo(Total)

