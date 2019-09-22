import {initialState} from './store';


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBMIT_DATA':
            return { ...state, loading: true };
        case 'RECEIVED_UI_CONTROLS':
            return { ...state, resonse: action.json[0], loading: false }
        default:
            return state;
    }
};
export default reducer;