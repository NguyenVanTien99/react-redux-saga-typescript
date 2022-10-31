import React from "react";
import "./App.css";
import Button from "./components/Button";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";

function App() {
  return (
    <div>
      <MainHeader title="Budget" />
      <label>your Balance: </label>
      <label>
        <DisplayBalance value="1,999,999" />
      </label>

      <DisplayBalances />

      <MainHeader title="History" />
      <table>
        <EntryLine description="Something 1" value="$1,000" />
        <EntryLine description="Something 2" value="$10,000" isExpense />
        <EntryLine description="Something 3" value="$2,000" />
        <EntryLine description="Something 4" value="$12,000" isExpense />
      </table>

      <MainHeader title="Add new transaction" />
      <NewEntryForm />
      <Button content="Cancel" />
      <Button content="OK" />
    </div>
  );
}

export default App;
