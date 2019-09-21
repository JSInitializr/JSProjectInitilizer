import { put, takeLatest, all } from 'redux-saga/effects';
function* submitFormData() {
    const json = yield fetch('To do: api to submit form data')
        .then(response => response.json());
    yield put({ type: "RESPONSE_RECEIVED", json: json.message, });
}
function* actionWatcher() {
    yield takeLatest('SUBMIT_DATA', submitFormData)
}
export default function* rootSaga() {
    yield all([actionWatcher(),]);
}