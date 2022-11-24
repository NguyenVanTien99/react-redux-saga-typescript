import { EntriesProps } from "../type";

const types = {
  GET_ENTRIES: "GET_ENTRIES",
  POPULATE_ENTRIES: "POPULATE_ENTRIES",
  POPULATE_ENTRY_DETAILS: "POPULATE_ENTRY_DETAILS",
  ADD_ENTRY: "ADD_ENTRY",
  REMOVE_ENTRY: "REMOVE_ENTRY",
  UPDATE_ENTRY: "UPDATE_ENTRY",
  REMOVE_ENTRY_RESULT: "REMOVE_ENTRY_RESULT",
  ADD_ENTRY_RESULT: "ADD_ENTRY_RESULT",
};
export default types;

export const addEntryRedux = (payload: EntriesProps) => {
  return { type: types.ADD_ENTRY, payload: { entry: payload } };
};

export const removeEntryRedux = (id: string) => {
  return { type: types.REMOVE_ENTRY, payload: { id } };
};

export const updateEntryRedux = (id: string, entry: EntriesProps) => {
  return { type: types.UPDATE_ENTRY, payload: { id, entry } };
};

export const getAllEntries = () => {
  return { type: types.GET_ENTRIES };
};

export const populateEntries = (entries: EntriesProps[]) => {
  return { type: types.POPULATE_ENTRIES, payload: { entries: entries } };
};

export const populateEntryDetails = (id: string, entry: EntriesProps) => {
  return { type: types.POPULATE_ENTRY_DETAILS, payload: { id, entry } };
};
