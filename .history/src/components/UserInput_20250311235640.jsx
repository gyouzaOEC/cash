import {useState} from "react";


export default function UserInput() {    
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required value={UserInput.initialInvestment} 
                onChange={(Event)=>handlechange("initialInvestment",Event.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required value={UserInput.annualInvestment} 
                onChange={(Event)=>handlechange("annualInvestment",Event.target.value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required value={UserInput.expectedReturn} 
                onChange={(Event)=>handlechange("expectedReturn",Event.target.value)}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required value={UserInput.duration} 
                onChange={(Event)=>handlechange("duration",Event.target.value)}/>
            </p>
        </div>
    </section>
}