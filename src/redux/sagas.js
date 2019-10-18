import { put, takeLatest, all } from "redux-saga/effects";

function* fetchUIControlsData() {
  const json = yield fetch(
    "https://raw.githubusercontent.com/JSInitializr/JSProjectInitilizer/master/ui.json"
  ).then(response => response.json());
  yield put({ type: "RECEIVED_UI_CONTROLS", response: json.response });
}

function* submitInputs(action) {
  console.log(action.payload);
  
  yield put({ type: "DOWNLOAING_PROJECT", downloadingState: true });

  yield fetch("https://dry-sea-46703.herokuapp.com/project", {
    method: "post",
    responseType: "blob",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...action.form
    })
  })
    .then(response => {
      return response.blob();
    })
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", action.form.metaDataItems["App name"] + ".zip"); //or any other extension
      document.body.appendChild(link);
      link.click();
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

    yield put({ type: "DOWNLOAING_PROJECT", downloadingState: false });
}

function* actionWatcherForFetchUIControls() {
  yield takeLatest("FETCH_UI_CONTROLS", fetchUIControlsData);
}

function* actionWatcherForSubmitInputs() {
  yield takeLatest("SUBMIT_INPUT_DATA", submitInputs);
}

export default function* rootSaga() {
  yield all([
    actionWatcherForFetchUIControls(),
    actionWatcherForSubmitInputs()
  ]);
}
