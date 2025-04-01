import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";

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
      <UserInput usersInput={UserInputs}/>
    </>

  }

  export default App
