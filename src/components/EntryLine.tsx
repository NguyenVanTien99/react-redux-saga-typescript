import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { removeEntryRedux } from "../actions/entries.action";
import { openEditModal } from "../actions/modals.action";
import { EntriesProps } from "../type";

type EntryLineProps = {
  entry: EntriesProps;
  // setIsOpenModalEdit: Dispatch<SetStateAction<boolean>>;
  editEntry?: (id: string) => void;
};

const EntryLine = ({ entry, editEntry }: EntryLineProps): JSX.Element => {
  const { isExpense, description, id, value } = entry;

  const dispatch = useDispatch();

  return (
    <>
      <tr style={{ background: isExpense ? "red" : "green" }}>
        <td>{description}</td>
        <td>{value}</td>
        <td>
          <button onClick={() => dispatch(openEditModal(id))}>edit</button>
          <button onClick={() => dispatch(removeEntryRedux(id))}>delete</button>
        </td>
      </tr>
    </>
  );
};

export default EntryLine;
