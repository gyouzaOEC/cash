import {useState} from "react";

export default function UserInput() {
    const [UserInput,setUserInput] = useState({
        in
    });
    
    
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required/>
            </p>
        </div>
    </section>
}