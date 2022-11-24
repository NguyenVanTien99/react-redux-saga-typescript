import { initSagas } from "../sagas";
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import entriesReducer from "../reducers/entries.reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import modalsReducers from "../reducers/modals.reducers ";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

const configureStore = () => {
  const store = createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReducers,
    }),
    composeWithDevTools(applyMiddleware(...middleWares))
  );

  initSagas(sagaMiddleware);

  return store;
};

export default configureStore;
