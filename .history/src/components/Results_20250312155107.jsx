import { calculateInvestmentResults } from '../util/investment.js';

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);

  console.log(resultsData);

  return (
    <table>
      <thead>
        <hr /
      </thead>
    </table>
  );
}