import React from "react";

type EntryLineProps = {
  description: string;
  value: string;
  isExpense?: boolean;
};

const EntryLine = ({
  description,
  isExpense = false,
  value,
}: EntryLineProps): JSX.Element => {
  return (
    <tr style={{ background: isExpense ? "red" : "green" }}>
      <td>{description}</td>
      <td>{value}</td>
      <td>
        <button>edit</button> <button>delete</button>
      </td>
    </tr>
  );
};

export default EntryLine;
