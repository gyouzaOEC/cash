import { useState } from "react";


export default function UserInput(onchange,UserInput) {
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required value={UserInput.initialInvestment}
                    onChange={(Event) => oncha("initialInvestment", Event.target.value)} />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required value={UserInput.annualInvestment}
                    onChange={(Event) => oncha("annualInvestment", Event.target.value)} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required value={UserInput.expectedReturn}
                    onChange={(Event) => oncha("expectedReturn", Event.target.value)} />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required value={UserInput.duration}
                    onChange={(Event) => oncha("duration", Event.target.value)} />
            </p>
        </div>
    </section>
}