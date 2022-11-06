import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "./Button";
import EntryForm from "./EntryForm";

type NewEntryFormProps = {
  addEntry?: () => void;
  value: number;
  description: string;
  isExpense: boolean;
  setIsExpense: Dispatch<SetStateAction<boolean>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setValue: Dispatch<SetStateAction<number>>;
};

const NewEntryForm = ({
  addEntry,
  ...props
}: NewEntryFormProps): JSX.Element => {
  return (
    <>
      <EntryForm {...props} />
      <Button content="Cancel" />
      <Button content="OK" onClick={addEntry ? () => addEntry() : undefined} />
    </>
  );
};

export default NewEntryForm;
