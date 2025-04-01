import { useState } from "react";
import Header from "./components/Header";

function App() {

  const [UserInput, setUserInput] = useState({
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
    <UserInput onchange={handlechange} />
  </>

}

export default App
