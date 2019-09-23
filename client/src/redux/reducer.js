
const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'SUBMIT_DATA':
            return { ...state, loading: true };
        case 'RECEIVED_UI_CONTROLS':
            return { ...state, response: action.response, loading: false }
        default:
            return state;
    }
};
export default reducer;