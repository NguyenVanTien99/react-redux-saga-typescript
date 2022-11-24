import { delay, put, take } from "redux-saga/effects";

export function* testSaga() {
  while (true) {
    yield take("TEST_MESSAGE");
  }
}

export function* dispatchTest() {
  while (true) {
    yield delay(1000);
    yield put({ type: "TEST_MESSAGE", payload: 1000 });
  }
}

// export default "xxx";
