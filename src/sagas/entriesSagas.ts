import { call, fork, put, take } from "redux-saga/effects";
import entriesTypes, { populateEntryDetails } from "../actions/entries.action";
import { populateEntries } from "../actions/entries.action";
import axios from "axios";
import { EntriesDescriptionProps, EntriesProps } from "../type";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  console.log("I need to get the entries now");
  const { data } = yield call(axios, "http://localhost:3333/entries");
  yield put(populateEntries(data));
}

export function* getEntryDetails(id: string) {
  const { data } = yield call(axios, `http://localhost:3333/values/${id}`);
  console.log(data);
  yield put(populateEntryDetails(id, data));
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);
  console.log("payload", payload);

  for (let index = 0; index < payload.entries.length; index++) {
    const entry = payload.entries[index];

    console.log("entry", entry);
    yield fork(getEntryDetails, entry.id);
  }
}
