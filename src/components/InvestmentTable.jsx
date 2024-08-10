import { useContext, useMemo } from "react";
import { CalcContext } from "../App";
import "./InvestmentTable.css";

export default function InvestmentTable() {
  const data = useContext(CalcContext);
  const investmentData = useMemo(() => {
    const investmentData = [];
    for (let i = 0; i <= data.calcData.duration; i++) {
      let invested =
        (investmentData[i - 1]?.invested ?? data.calcData.initial) +
        data.calcData.annualInvestment;
      let income = invested * (data.calcData.roi / 100);
      invested = invested + income;
      let total = invested + income;
      investmentData.push({ year: i, invested, income, total });
    }
    return investmentData;
  }, [data]);

  return (
    <table className="calc-table">
      <thead>
        <tr>
          <th>Год</th>
          <th>Инвестировано</th>
          <th>На счете</th>
          <th>Доход</th>
        </tr>
      </thead>
      <tbody>
        {investmentData.map((value) => (
          <tr key={value.year}>
            <td>{value.year + 1}</td>
            <td>{value.invested.toFixed(2)}</td>
            <td>{value.total.toFixed(2)}</td>
            <td>{value.income.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
