
import Header from "./components/Header";

function App() {


  export default function UserInput() {
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
      <UserInput />
    </>

  }

  export default App
