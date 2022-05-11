import axios from 'axios'; 

const loading = location => ({ type: 'LOADING', payload: location });

const loadResult = ({ login, name, location, followers, following, repos_url, public_repos, avatar_url } ) => ({ 
    type: 'LOAD_RESULT',
    payload: { login, name, location, followers, following, repos_url, public_repos, avatar_url } 
});

const getResult = searchTerm => {
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
// helper
const userSearch = async searchTerm => {
    try {
        const { data } = await axios.get(`https://api.github.com/users/${searchTerm}`);
        return data
    } catch(err) {
        if (data.status === 404) { throw Error('That\'s not a valid user - Please try again!') }
        throw new Error(err.message)
    }
}

const getRepos = searchTerm => {
    return async (dispatch) => {
        dispatch(loading(searchTerm));
        try {
            const result = await repoSearch(searchTerm);
            dispatch(loadResult(result))
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        };
    };
};

// helper function
const repoSearch = async searchTerm => {
    try {
        const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
        return data
    } catch(err) {
        if (data.status === 404) { throw Error('That\'s not a valid repo - Please try again!') }
        throw new Error(err.message)
    }
}

export {
    getResult,
    getRepos
}