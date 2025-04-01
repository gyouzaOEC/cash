import { useState } from "react";


export default function UserInput(onChange,userInput) {
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required value={userInput.initialInvestment}
                    onChange={(Event) => onChange("initialInvestment", Event.target.value)} />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required value={userInput.annualInvestment}
                    onChange={(Event) => onChange("annualInvestment", Event.target.value)} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required value={userInput.expectedReturn}
                    onChange={(Event) => onChange("expectedReturn", Event.target.value)} />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required value={userInput.duration}
                    onChange={(Event) => onChange("duration", Event.target.value)} />
            </p>
        </div>
    </section>
}