import React, { Dispatch, SetStateAction } from "react";
import map from "lodash/map";
import EntryLine from "./EntryLine";
import { EntriesProps } from "../type";

type EntryLinesProps = {
  entries: EntriesProps[];
  editEntry: (id: number) => void;
};

const EntryLines = ({ entries, editEntry }: EntryLinesProps): JSX.Element => {
  return (
    <table>
      {map(entries, (entry) => (
        <EntryLine
          // setIsOpenModalEdit={setIsOpenModalEdit}
          key={entry.id}
          entry={entry}
          // editEntry={editEntry}
        />
      ))}
    </table>
  );
};

export default EntryLines;
