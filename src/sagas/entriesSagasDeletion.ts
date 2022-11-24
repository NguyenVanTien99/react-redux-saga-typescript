import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import entriesTypes from "../actions/entries.action";

export function* deleteEntrySaga() {
  while (true) {
    const { payload } = yield take(entriesTypes.REMOVE_ENTRY);
    console.log("payload", payload);

    yield call(deleteEntry, payload.id);
    yield put({ type: "REMOVE_ENTRY_RESULT", payload: { id: payload.id } });
  }
}

async function deleteEntry(id: string) {
  await axios.delete(`http://localhost:3333/entries/${id}`);
  await axios.delete(`http://localhost:3333/values/${id}`);
}
