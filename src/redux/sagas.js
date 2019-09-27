import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchUIControlsData() {
    const json = yield fetch('https://raw.githubusercontent.com/JSInitializr/JSProjectInitilizer/master/ui.json')
        .then(response => response.json());
    yield put({ type: "RECEIVED_UI_CONTROLS", response: json.response, });
}

function* actionWatcherForFetchUIControls() {
    yield takeLatest('FETCH_UI_CONTROLS', fetchUIControlsData)
}

export default function* rootSaga() {
    yield all([actionWatcherForFetchUIControls()]);
}