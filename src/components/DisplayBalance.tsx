import React from "react";

type DisplayBalanceProps = {
  value?: number;
  color?: string | number;
};

const DisplayBalance = ({ value, color }: DisplayBalanceProps): JSX.Element => {
  return (
    <>
      <td style={{ background: color }}>{value}</td>
    </>
  );
};

export default DisplayBalance;
