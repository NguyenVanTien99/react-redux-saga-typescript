import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import entriesTypes from "../actions/entries.action";
import { EntriesProps } from "../type";

export function* addEntrySaga() {
  yield takeLatest(entriesTypes.ADD_ENTRY, addEntryToDb);
}

function* addEntryToDb({ payload }: any) {
  yield call(addEntry, payload);
  yield call(addEntryDetails, payload);
  yield put({ type: entriesTypes.ADD_ENTRY_RESULT, payload });
}

async function addEntry({ id, description }: EntriesProps) {
  await axios.post("http://localhost:3333/entries", {
    id,
    description,
  });
}

async function addEntryDetails({ id, isExpense, value }: EntriesProps) {
  await axios.post("http://localhost:3333/values", {
    id,
    isExpense,
    value,
  });
}
