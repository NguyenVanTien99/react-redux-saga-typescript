import * as entriesSaga from "./entriesSagas";
import * as entriesSagaDeletion from "./entriesSagasDeletion";
import * as entriesSagaAdd from "./entriesSagasAdd";

export const initSagas = (sagaMiddleware: any) => {
  Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(entriesSagaDeletion).forEach(
    sagaMiddleware.run.bind(sagaMiddleware)
  );
  Object.values(entriesSagaAdd).forEach(
    sagaMiddleware.run.bind(sagaMiddleware)
  );
};
