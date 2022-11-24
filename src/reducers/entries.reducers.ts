import { EntriesProps } from "../type";
import entriesTypes from "../actions/entries.action";

const entriesReducer = (
  state: EntriesProps[] = initialEntries,
  action: {
    type: string;
    payload: { id: string; entry: EntriesProps; entries: EntriesProps[] };
  }
) => {
  let newEntries;
  switch (action.type) {
    case entriesTypes.POPULATE_ENTRIES:
      return action.payload.entries;
    case entriesTypes.ADD_ENTRY_RESULT:
      // case entriesTypes.ADD_ENTRY:
      newEntries = state.concat({ ...action.payload.entry });
      return newEntries;
    case entriesTypes.REMOVE_ENTRY_RESULT:
      // case entriesTypes.REMOVE_ENTRY:
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;
    case entriesTypes.POPULATE_ENTRY_DETAILS:
    case entriesTypes.UPDATE_ENTRY:
      newEntries = [...state];
      const index = newEntries.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEntries[index] = { ...newEntries[index], ...action.payload.entry };
      return newEntries;
    default:
      return state;
  }
};

export default entriesReducer;

var initialEntries: EntriesProps[] = [];
