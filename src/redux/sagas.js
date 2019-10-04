import { put, takeLatest, all } from "redux-saga/effects";
const axios = require("axios");

function* fetchUIControlsData() {
  const json = yield fetch(
    "https://raw.githubusercontent.com/JSInitializr/JSProjectInitilizer/master/ui.json"
  ).then(response => response.json());
  yield put({ type: "RECEIVED_UI_CONTROLS", response: json.response });
}

function* submitInputs(action) {
  debugger;
  console.log(action.payload);
 
  fetch('http://localhost:3000/project', {
    method: 'post',
    responseType: "blob",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...action.form
    })
  }).then((response) => {
    return response.blob();
  }).then(blob => {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Project.zip"); //or any other extension
    document.body.appendChild(link);
    link.click();
  }).catch(function (error) {
    // handle error
    console.log(error);
  })
    .finally(function () {
      // always executed
      console.log("end");
    });

  // axios
  //   .post("http://localhost:3000/project", {
  //     responseType: "blob",
  //     headers: { "Access-Control-Allow-Origin": "*" }
  //   })
  //   .then(response => {
  //     const url = window.URL.createObjectURL(new Blob([response.data]));
  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.setAttribute("download", "Project.zip"); //or any other extension
  //     document.body.appendChild(link);
  //     link.click();
  //   })
  //   .catch(function(error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .finally(function() {
  //     // always executed
  //     console.log("end");
  //   });
  //yield put({ type: constants.RECEIVED_SUBMIT_FORM_RESPONSE, response: json.response,});
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
