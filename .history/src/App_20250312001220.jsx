import { useState } from "react";
import Header from "./components/Header";
import  UserInput from "./components/UserInput"
import Result from "./components/Result";


function App() {

  const [UserInputs, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handlechange(inputIdentifier, newValue) {
    setUserInputs(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue
      };
    });
  };


  return <>
    <Header />
    <UserInput userInput={UserInputs} onChange={handlechange} />
    <Result input={Use}/>
  </>

}

export default App
