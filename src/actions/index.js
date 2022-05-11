import axios from 'axios'; 

const loading = location => ({ type: 'LOADING', payload: location });

const loadResult = ({ login, public_repos } ) => ({ 
    type: 'LOAD_RESULT',
    payload: { login, public_repos } 
});

export const getResult = searchTerm => {
    return async (dispatch) => {
        dispatch(loading(searchTerm));
        try {
            const gitSearch = await userSearch(searchTerm);
            dispatch(loadResult(gitSearch))
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        };
    };
};

const userSearch = async searchTerm => {
    try {
        const { data } = await axios.get(`https://api.github.com/users/${searchTerm}`);
        console.log(data)
        return data
    } catch(err) {
        if (data.status === 404) { throw Error('That\'s not a valid user - Please try again!') }
        throw new Error(err.message)
    }
}