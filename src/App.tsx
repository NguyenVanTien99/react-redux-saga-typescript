import { toNumber } from "lodash";
import filter from "lodash/filter";
import map from "lodash/map";
import { useEffect, useState } from "react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import ModalEdit from "./components/ModalEdit";
import NewEntryForm from "./components/NewEntryForm";
import { EntriesProps } from "./type";

function App() {
  const [entries, setEntries] = useState<EntriesProps[]>(initialEntries);

  const [description, setDescription] = useState<string>("");

  const [value, setValue] = useState<number>(0);

  const [isExpense, setIsExpense] = useState<boolean>(false);

  const [isOpenModalEdit, setIsOpenModalEdit] = useState<boolean>(false);

  const [entryId, setEntryId] = useState<number | undefined>();

  const [incomeTotal, setIncomeTotal] = useState<number | undefined>(0);

  const [expenseTotal, setExpenseTotal] = useState<number | undefined>(0);

  const [total, setTotal] = useState<number | undefined>(0);

  const resetEntry = (): void => {
    setDescription("");

    setValue(0);

    setIsExpense(false);
  };

  useEffect(() => {
    if (!isOpenModalEdit && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);

      const newEntries = [...entries];

      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;

      setEntries(newEntries);

      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenModalEdit]);

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

  const deleteEntry = (id: number): void => {
    const result = filter(entries, (entry) => {
      return entry.id !== id;
    });

    setEntries(result);
  };

  const addEntry = (): void => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      isExpense,
      value,
    });

    setEntries(result);

    resetEntry();
  };

  const editEntry = (id: number): void => {
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);

      const entry = entries[index];

      setEntryId(id);

      setDescription(entry.description);

      setValue(entry.value);

      setIsExpense(entry.isExpense || false);

      setIsOpenModalEdit(true);
    }
  };

  const entryFormProps = {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
  };

  return (
    <div>
      <MainHeader title="Budget" />
      <label>your Balance: </label>

      <DisplayBalance value={total} />

      <DisplayBalances expenseTotal={expenseTotal} incomeTotal={incomeTotal} />

      <MainHeader title="History" />

      <EntryLines
        setIsOpenModalEdit={setIsOpenModalEdit}
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />

      <MainHeader title="Add new transaction" />

      <NewEntryForm addEntry={addEntry} {...entryFormProps} />

      <ModalEdit
        isOpen={isOpenModalEdit}
        setIsOpen={setIsOpenModalEdit}
        {...entryFormProps}
      />
    </div>
  );
}

export default App;

var initialEntries: EntriesProps[] = [
  {
    id: 1,
    description: "Work income",
    value: 1000,
    isExpense: true,
  },
  {
    id: 2,
    description: "Water bill",
    value: 200,
    isExpense: false,
  },
  {
    id: 3,
    description: "Rent",
    value: 39,
    isExpense: true,
  },
  {
    id: 4,
    description: "Power bill",
    value: 30000,
    isExpense: false,
  },
];
