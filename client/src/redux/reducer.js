import {initialState} from './store';


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBMIT_DATA':
            return { ...state, loading: true };
        case 'RESPONSE_RECEIVED':
            return { ...state, resonse: action.json[0], loading: false }
        default:
            return state;
    }
};
export default reducer;