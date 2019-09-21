const initialState = {
    response: {
        tabs: [{
            label: 'Language',
            options: ['Javascript', 'Typescript'],
            required: true,
            selectedValue: null,
            childTab: null,
        }, {
            label: 'Technology',
            options: ["Angular", "React", "React Native", "Node js server", "VS Code Extension"],
            required: true,
            selectedValue: null,
            childTab: {
                whichTab:'Node js server',
                label: 'Database',
                options: ["MongoDB", "MySql", "PostgreSQL", "None"],
                required: true,
                selectedValue: null
            },
        },],
        metaData:[{
            label:'Package Name',
            placeholder:'project identifier',
            value:'',
            required:true
        },{
            label:'Version',
            placeholder:'1.0.0',
            value:'',
            required:true
        },{
            label:'Description',
            placeholder:'About project',
            value:'',
            required:false
        },{
            label:'Git repository link',
            placeholder:'repo link',
            value:'',
            required:false
        },{
            label:'Keywords',
            placeholder:'eg. js, node',
            value:'',
            required:false
        },{
            label:'Author',
            placeholder:'developer name',
            value:'',
            required:false
        },{
            label:'License',
            placeholder:'eg. MIT, Apache',
            value:'',
            required:false
        },]
    },
};


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