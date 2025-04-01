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
                <input type="number" required value={}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required value={}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required value={}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required value={}/>
            </p>
        </div>
    </section>
}