import { put, takeLatest, all } from 'redux-saga/effects';
import { fetchUIRenderData } from './actions';
function* submitFormData() {
    const json = yield fetch('To do: api to submit form data')
        .then(response => response.json());
    yield put({ type: "RECEIVED_UI_CONTROLS", json: json.message, });
}

function* actionWatcherForFetchUIControls(){
    yield takeLatest('FETCH_UI_CONTROLS',fetchUIControlsData)
}


export default function* rootSaga() {
    yield all([actionWatcherForFetchUIControls(),actionWatcherForFetchDependencyList]);
}