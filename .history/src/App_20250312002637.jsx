import { useState } from "react";
import Header from "./components/Header";
import  UserInput from "./components/UserInput"
import Result from "./components/Result";


function App() {

  const [UserInputs, setUserInputs] = useState({
    a: 10000,
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
    <UserInput usersInput={UserInputs} onChange={handlechange} />
    <Result input={UserInputs}/>
  </>

}

export default App
