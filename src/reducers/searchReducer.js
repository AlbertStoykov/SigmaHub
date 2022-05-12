const initState = { login: "", result: { name: "", public_repos: "" }, loading: false };

const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING':
            return { ...state, loading: true };
        case 'LOAD_RESULT':
            return { ...state, result: action.payload, loading: false, error: false };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false };
        default: 
            return state;
    };
};

export default searchReducer;