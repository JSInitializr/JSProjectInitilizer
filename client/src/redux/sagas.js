import { put, takeLatest, all } from 'redux-saga/effects';
import * as constants from '../assets/constants';


function* fetchUIControlsData() {
    const json = yield fetch('https://raw.githubusercontent.com/JSInitializr/JSProjectInitilizer/master/ui.json')
        .then(response => response.json());
    yield put({ type: "RECEIVED_UI_CONTROLS", response: json.response, });
}

function* submitInputs(){
    const json = yield fetch('https://raw.githubusercontent.com/JSInitializr/JSProjectInitilizer/master/ui.json')
        .then(response => response.json());
    yield put({ type: constants.RECEIVED_SUBMIT_FORM_RESPONSE, response: json.response,});
}



function* actionWatcherForFetchUIControls() {
    yield takeLatest('FETCH_UI_CONTROLS', fetchUIControlsData)
}

function* actionWatcherForSubmitInputs(){
    yield takeLatest('SUBMIT_INPUT_DATA',submitInputs);
}

export default function* rootSaga() {
    yield all([actionWatcherForFetchUIControls(),actionWatcherForSubmitInputs()]);
}