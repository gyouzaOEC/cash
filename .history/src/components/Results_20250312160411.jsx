import { calculateInvestmentResults,formatter } from '../util/investment.js';

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
    
  console.log(resultsData);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map(yeardata=>{
          const totalInterest = yeardata.valueEndOfYear - yeardata.annualInvestment * yeardata.year

          return (<tr key={yeardata.year}>
            <td>{yeardata.year}</td>
            <td>{formatter.fomat(yeardata.valueEndOfYear)}</td>
            <td>{formatter.fomat(yeardata.interest)}</td>
            <td></td>
            <td></td>
          </tr>
        );
        })}
      </tbody>
    </table>
  );
}