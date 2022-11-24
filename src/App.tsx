import { toNumber } from "lodash";
import filter from "lodash/filter";
import map from "lodash/map";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import ModalEdit from "./components/ModalEdit";
import NewEntryForm from "./components/NewEntryForm";
import { EntriesProps, ModalsControl } from "./type";
import { getAllEntries } from "./actions/entries.action";

function App() {
  const [incomeTotal, setIncomeTotal] = useState<number | undefined>(0);

  const [expenseTotal, setExpenseTotal] = useState<number | undefined>(0);

  const [total, setTotal] = useState<number | undefined>(0);

  const [entry, setEntry] = useState<EntriesProps>({
    description: "",
    id: "",
    value: 0,
    isExpense: false,
  });

  const entries = useSelector(
    (state: { entries: EntriesProps[] }) => state.entries
  );

  const { isOpen, id } = useSelector(
    (state: { modals: ModalsControl }) => state.modals
  );

  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index]);
  }, [id, isOpen, entries]);

  // const resetEntry = (): void => {
  //   setDescription("");

  //   setValue(0);

  //   setIsExpense(false);
  // };

  // useEffect(() => {
  //   if (!isOpenModalEdit && entryId) {
  //     // const index = entries.findIndex((entry) => entry.id === entryId);

  //     // const newEntries = [...entries];

  //     // newEntries[index].description = description;
  //     // newEntries[index].value = value;
  //     // newEntries[index].isExpense = isExpense;

  //     // setEntries(newEntries);

  //     resetEntry();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isOpenModalEdit]);

  useEffect(() => {
    let totalIncomes = 0;

    let totalExpenses = 0;

    map(entries, ({ value, isExpense }) => {
      if (isExpense) {
        return (totalExpenses += toNumber(value));
      } else {
        return (totalIncomes += toNumber(value));
      }
    });

    let total = totalIncomes - totalExpenses;

    setTotal(total);

    setIncomeTotal(totalIncomes);

    setExpenseTotal(totalExpenses);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entries]);

  // const addEntry = (): void => {
  //   const result = entries.concat({
  //     id: entries.length + 1,
  //     description,
  //     isExpense,
  //     value,
  //   });

  //   // setEntries(result);

  //   resetEntry();
  // };

  const editEntry = (id: number): void => {
    // if (id) {
    //   const index = entries.findIndex((entry) => entry.id === id);
    //   const entry = entries[index];
    //   setEntryId(id);
    //   setDescription(entry.description);
    //   setValue(entry.value);
    //   setIsExpense(entry.isExpense || false);
    //   setIsOpenModalEdit(true);
    // }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEntries());
  }, [dispatch]);

  return (
    <div>
      <MainHeader title="Budget" />
      <label>your Balance: </label>

      <DisplayBalance value={total} />

      <DisplayBalances expenseTotal={expenseTotal} incomeTotal={incomeTotal} />

      <MainHeader title="History" />

      <EntryLines entries={entries} editEntry={editEntry} />

      <MainHeader title="Add new transaction" />

      <NewEntryForm />

      <ModalEdit
        isOpen={isOpen}
        {...entry}
        // setIsOpen={setIsOpenModalEdit}
        // {...entryFormProps}
      />
    </div>
  );
}

export default App;
