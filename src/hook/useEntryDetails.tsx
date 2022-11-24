import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux, updateEntryRedux } from "../actions/entries.action";

import { v4 as uuid } from "uuid";
import { toNumber } from "lodash";
import { closeEditModal } from "../actions/modals.action";

const useEntryDetails = (
  desc: string = "",
  val: number = 0,
  isExp: boolean = false
) => {
  const [description, setDescription] = useState<string>(desc);

  const [value, setValue] = useState<number>(toNumber(val));

  const [isExpense, setIsExpense] = useState<boolean>(isExp);

  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(desc);
    setValue(val);
    setIsExpense(isExp);
  }, [desc, val, isExp]);

  const updateEntry = (id: string) => {
    dispatch(
      updateEntryRedux(id, {
        id,
        description,
        value,
        isExpense,
      })
    );
    dispatch(closeEditModal());
    resetValue();
  };

  const addEntry = () => {
    dispatch(
      addEntryRedux({
        id: uuid(),
        description,
        value,
        isExpense,
      })
    );
    resetValue();
  };

  const resetValue = () => {
    setDescription("");
    setValue(0);
    setIsExpense(false);
  };

  return {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
    updateEntry,
  };
};

export default useEntryDetails;
