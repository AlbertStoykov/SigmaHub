const initState = { location: "London", result: { sunrise: "4:11:25 AM", sunset: "7:57:24 PM" }, loading: false };

const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING':
            return { ...state, location: action.payload, loading: true };
        case 'LOAD_RESULT':
            return { ...state, result: action.payload, loading: false, error: false };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false };
        default: 
            return state;
    };
};

export default searchReducer;