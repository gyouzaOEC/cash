import {useState} from "react";


    
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required value={UserInput.initialInvestment} 
                onChange={()=>handlechange("initialInvestment",Event.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required value={UserInput.annualInvestment} 
                onChange={()=>handlechange("annualInvestment",Event.target.value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required value={UserInput.expectedReturn} 
                onChange={()=>handlechange("expectedReturn",Event.target.value)}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required value={UserInput.duration} 
                onChange={()=>handlechange("duration",Event.target.value)}/>
            </p>
        </div>
    </section>
}