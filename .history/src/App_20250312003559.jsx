import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {

    const [UserInputs, setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
    });

    function handlechange(inputIdentifier, newValue) {
      setUserInput(prevUserInputs => {
        return {
          ...prevUserInputs,
          [inputIdentifier]: newValue
        };
      });
    };


    return <>
      <Header />
      <UserInput usersInput={UserInputs} onChange={handlechange}/>
      <Result input={Use}/>
    </>

  }

  export default App
