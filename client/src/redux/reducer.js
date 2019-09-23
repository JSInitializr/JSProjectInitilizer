import * as constants from '../assets/constants'


const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'SUBMIT_DATA':
            return { ...state, loading: true };
        case 'RECEIVED_UI_CONTROLS':
            return { ...state, response: action.response, loading: false }
        case constants.UPDATE_TABS:
            return { ...state}
        default:
            return state;
    }
};
export default reducer;