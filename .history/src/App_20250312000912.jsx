import { useState } from "react";
import Header from "./components/Header";
import  UserInput from "./components/UserInput"



function App() {

  const [UserInputs, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handlechange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue
      };
    });
  };


  return <>
    <Header />
    <UserInput userInput={UserInput} onChange={handlechange} />
  </>

}

export default App
