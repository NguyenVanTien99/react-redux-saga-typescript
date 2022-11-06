import React from "react";
import DisplayBalance from "./DisplayBalance";

type DisplayBalancesProps = {
  expenseTotal?: number;
  incomeTotal?: number;
};

const DisplayBalances = ({
  expenseTotal,
  incomeTotal,
}: DisplayBalancesProps): JSX.Element => {
  return (
    <table>
      <tr>
        <th>Income</th>
        <th>Expenses</th>
      </tr>
      <tr>
        <DisplayBalance value={incomeTotal} color="green" />
        <DisplayBalance value={expenseTotal} color="red" />
      </tr>
    </table>
  );
};

export default DisplayBalances;
