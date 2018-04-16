import {
    UPDATE_USER_WORD_SETS_ERROR,
    UPDATE_USER_WORD_SETS_SUCCESS,
    UPDATE_USER_WORD_SETS_REQUEST
} from '../actions/users';

const initialState = {
    currentUser: null,
    loading: false,
    error: null
};

export const reducer = (state = initialState, action) => {
    if (action.type === UPDATE_USER_WORD_SETS_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === UPDATE_USER_WORD_SETS_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            currentUser: {...state.currentUser, wordSets: action.wordSets}
        });
    } else if (action.type === UPDATE_USER_WORD_SETS_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    } 
    
    return state;
}
