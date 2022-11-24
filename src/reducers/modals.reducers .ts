import { ModalsControl } from "../type";
import entriesTypes from "../actions/modals.action";

const reducers = (
  state: ModalsControl = { isOpen: false, id: "" },
  action: { type: string; payload: { id: string } }
) => {
  switch (action.type) {
    case entriesTypes.OPEN_EDIT_MODAL:
      return { ...state, isOpen: true, id: action.payload.id };
    case entriesTypes.CLOSE_EDIT_MODAL:
      return { ...state, isOpen: false, id: null };
    default:
      return state;
  }
};

export default reducers;
