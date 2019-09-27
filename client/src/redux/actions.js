
export const fetchUIRenderData = () => ({
    type: 'FETCH_UI_CONTROLS',
});

export const submitInputData = (formData) => ({
    type:'SUBMIT_INPUT_DATA',
    form:formData,
})



