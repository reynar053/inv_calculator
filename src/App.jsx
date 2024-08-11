import { createContext, useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import InvestmentTable from "./components/InvestmentTable";
import Placeholder from "./components/Placeholder";
import ferret from "./assets/ferret.gif";

export const CalcContext = createContext(null);
const INITIAL_INVESTMENT_DATA = {
  initial: 1000,
  duration: 6,
  roi: 10,
  annualInvestment: 500,
};

function App() {
  const [calcData, setCalcData] = useState(INITIAL_INVESTMENT_DATA);
  Object.values(calcData).reduce;
  function handleData(data) {
    setCalcData({ ...data });
  }

  const data = {
    calcData,
    handleData,
  };
  return (
    <>
      <img src={ferret}></img>
      <h1>Калькулятор (лосося)</h1>
      <CalcContext.Provider value={data}>
        <UserInput />
        <InvestmentTable />
      </CalcContext.Provider>
    </>
  );
}

export default App;
