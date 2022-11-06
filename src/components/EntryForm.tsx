import { toNumber } from "lodash";
import React, { Dispatch, SetStateAction } from "react";

type EntryFormProps = {
  value: number;
  description: string;
  isExpense: boolean;
  setIsExpense: Dispatch<SetStateAction<boolean>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setValue: Dispatch<SetStateAction<number>>;
};

const EntryForm = (props: EntryFormProps): JSX.Element => {
  const {
    setDescription,
    setIsExpense,
    setValue,
    value,
    isExpense,
    description,
  } = props;

  return (
    <>
      <form action="">
        <input
          name="Description"
          type="text"
          placeholder="new shinny thing"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <br />
        <input
          name="Value"
          type="text"
          placeholder="1,000"
          value={value}
          onChange={(event) => setValue(toNumber(event.target.value))}
        />
      </form>
      <input
        type="checkbox"
        name="is expense"
        id="expense"
        checked={isExpense}
        onChange={() => setIsExpense((oldState) => !oldState)}
      />
      <label htmlFor="">is Expense</label>
    </>
  );
};

export default EntryForm;
