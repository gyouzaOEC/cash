export default function UserInput(onChange,usersInput) {
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required value={usersInputt}
                    onChange={(Event) => onChange("initialInvestment", Event.target.value)} />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required value={usersInput.annualInvestment}
                    onChange={(Event) => onChange("annualInvestment", Event.target.value)} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required value={usersInput.expectedReturn}
                    onChange={(Event) => onChange("expectedReturn", Event.target.value)} />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required value={usersInput.duration}
                    onChange={(Event) => onChange("duration", Event.target.value)} />
            </p>
        </div>
    </section>
}

