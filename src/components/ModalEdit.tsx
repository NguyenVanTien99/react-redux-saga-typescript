import React, { Dispatch, SetStateAction } from "react";

import Modal from "react-modal";
import Button from "./Button";
import EntryForm from "./EntryForm";

type ModalEditProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  value: number;
  description: string;
  isExpense: boolean;
  setIsExpense: Dispatch<SetStateAction<boolean>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setValue: Dispatch<SetStateAction<number>>;
};

const ModalEdit = ({
  isOpen,
  setIsOpen,
  ...props
}: ModalEditProps): JSX.Element => {
  return (
    <Modal isOpen={isOpen}>
      <h2>Edit modal</h2>

      <EntryForm {...props} />

      <Button content="OK" onClick={() => setIsOpen(false)} />

      <Button content="EDIT" onClick={() => setIsOpen(false)} />
    </Modal>
  );
};

export default ModalEdit;
