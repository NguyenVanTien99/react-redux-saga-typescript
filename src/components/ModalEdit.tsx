import React, { Dispatch, SetStateAction } from "react";

import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { closeEditModal } from "../actions/modals.action";
import { EntriesProps } from "../type";
import Button from "./Button";
import EntryForm from "./EntryForm";
import useEntryDetails from "../hook/useEntryDetails";

type ModalEditProps = {
  isOpen: boolean;
  value?: number;
  description?: string;
  isExpense?: boolean;
  id: string;
};

const ModalEdit = ({
  isOpen,
  value,
  description,
  isExpense,
  id,
}: // setIsOpen,
// ...props
ModalEditProps): JSX.Element => {
  const dispatch = useDispatch();

  const entryUpdate = useEntryDetails(description, value, isExpense);

  return (
    <Modal isOpen={isOpen}>
      <h2>Edit modal</h2>

      <EntryForm {...entryUpdate} />

      <Button content="CLOSE" onClick={() => dispatch(closeEditModal())} />

      <Button content="EDIT" onClick={() => entryUpdate.updateEntry(id)} />
    </Modal>
  );
};

export default ModalEdit;
