import React from "react";
import DisplayBalance from "./DisplayBalance";

const DisplayBalances = (): JSX.Element => {
  return (
    <table>
      <tr>
        <th>Income</th>
        <th>Expenses</th>
      </tr>
      <tr>
        <DisplayBalance value="10,000" color="green" />
        <DisplayBalance value="102,000" color="red" />
      </tr>
    </table>
  );
};

export default DisplayBalances;
