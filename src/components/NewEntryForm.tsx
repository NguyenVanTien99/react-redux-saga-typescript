import { Dispatch, SetStateAction } from "react";
import useEntryDetails from "../hook/useEntryDetails";
import Button from "./Button";
import EntryForm from "./EntryForm";

// type NewEntryFormProps = {
//   addEntry?: () => void;
//   value: number;
//   description: string;
//   isExpense: boolean;
//   setIsExpense: Dispatch<SetStateAction<boolean>>;
//   setDescription: Dispatch<SetStateAction<string>>;
//   setValue: Dispatch<SetStateAction<number>>;
// };

const NewEntryForm = (): JSX.Element => {
  const {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
  } = useEntryDetails();

  const entryFormProps = {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
  };

  return (
    <>
      <EntryForm {...entryFormProps} />
      <Button content="Cancel" />
      <Button content="OK" onClick={() => addEntry()} />
    </>
  );
};

export default NewEntryForm;
