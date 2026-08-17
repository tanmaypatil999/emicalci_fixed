import React,{useState} from "react";
function Emi()
{
    const [principle,setPrinciple]=useState();   
    const [interest,setInterest]=useState();
    const [year,setYear]=useState();
    const [emi,setEmi]=useState();
    
    function getInput(e)
    {
        if(e.target.name==="Principle")
        {
            setPrinciple(e.target.value);  
        }
        else if(e.target.name==="Interest")
        {
            setInterest(e.target.value);  
        }
        else if(e.target.name==="Year")
        {
            setYear(e.target.value);  
        }
    }

    function calEmi()
    {
        let r=interest
        if(principle && interest && year)
        {
            r=r/12/100;
            let power=Math.pow(1+r,year*12);
            let emi=principle*((r*power)/(power-1));
            setEmi(emi.toFixed(2));
        }
    }

    return(
        <div className="main">
            <h1>EMI Calculator</h1>
            <div>
                <p>Enter the Principle Amount in Rs:</p>
                <input type="text" placeholder="Enter the Principle Amount" name="Principle" onChange={getInput}/>
                <p>Enter the Rate of Interest:</p>
                <input type="text" placeholder="Enter the Rate of Interest" name="Interest" onChange={getInput}/>
                <p>Enter the Years of Loan:</p>
                <input type="text" placeholder="Enter the Years of Loan" name="Year" onChange={getInput}/>
            </div>
            <button onClick={calEmi}>Calculate EMI</button>
            <div className="result">
                <p>Your EMI Per Month in Rs:{emi}</p>
            </div>
        </div>
    );
}
export default Emi;