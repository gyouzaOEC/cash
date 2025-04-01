import {useState} from "react";

export default function UserInput() {
    const [UserInput,setUserInput] = useState({
        initialInvestment:10000,
        annualInvestment:1200,
        expectedReturn:6,
        duration:10,
    });
    
    function handlechange(inputIdentifier,newValue){
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]:newValue
            };
        });
    };

    
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
                onChange={()=>handlechange("",Event.target.value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required value={UserInput.expectedReturn} 
                onChange={()=>handlechange()}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required value={UserInput.duration} 
                onChange={()=>handlechange()}/>
            </p>
        </div>
    </section>
}