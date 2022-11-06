import React, { Dispatch, SetStateAction } from "react";
import map from "lodash/map";
import EntryLine from "./EntryLine";
import { EntriesProps } from "../type";

type EntryLinesProps = {
  entries: EntriesProps[];
  deleteEntry: (number: number) => void;
  setIsOpenModalEdit: Dispatch<SetStateAction<boolean>>;
  editEntry: (id: number) => void;
};

const EntryLines = ({
  entries,
  deleteEntry,
  setIsOpenModalEdit,
  editEntry,
}: EntryLinesProps): JSX.Element => {
  return (
    <table>
      {map(entries, (entry) => (
        <EntryLine
          setIsOpenModalEdit={setIsOpenModalEdit}
          key={entry.id}
          deleteEntry={deleteEntry}
          entry={entry}
          editEntry={editEntry}
        />
      ))}
    </table>
  );
};

export default EntryLines;
