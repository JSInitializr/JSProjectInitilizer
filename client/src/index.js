import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore ,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas';
const sagaMiddleware = createSagaMiddleware();
     
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger),
 );
 sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
    document.getElementById('root'));


// https://rocky-badlands-99248.herokuapp.com:443