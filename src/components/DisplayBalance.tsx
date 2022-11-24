import React from "react";

type DisplayBalanceProps = {
  value?: number;
  color?: string | number;
};

const DisplayBalance = ({ value, color }: DisplayBalanceProps): JSX.Element => {
  return (
    <>
      <td style={{ background: color }}>{isNaN(value || 0) ? 0 : value}</td>
    </>
  );
};

export default DisplayBalance;
