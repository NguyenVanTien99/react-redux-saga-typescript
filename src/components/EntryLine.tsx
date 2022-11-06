import React, { Dispatch, SetStateAction, useState } from "react";
import { EntriesProps } from "../type";
import ModalEdit from "./ModalEdit";

type EntryLineProps = {
  entry: EntriesProps;
  deleteEntry: (number: number) => void;
  setIsOpenModalEdit: Dispatch<SetStateAction<boolean>>;
  editEntry: (id: number) => void;
};

const EntryLine = ({
  entry,
  deleteEntry,
  editEntry,
}: EntryLineProps): JSX.Element => {
  const { isExpense, description, id, value } = entry;

  return (
    <>
      <tr style={{ background: isExpense ? "red" : "green" }}>
        <td>{description}</td>
        <td>{value}</td>
        <td>
          <button onClick={() => editEntry(id)}>edit</button>
          <button onClick={() => deleteEntry(id)}>delete</button>
        </td>
      </tr>
    </>
  );
};

export default EntryLine;
