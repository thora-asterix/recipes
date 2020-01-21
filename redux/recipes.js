import * as  ActionTypes from './ActionTypes';

export const recipes = (state = {recipes: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_RECIPES: 
        return { ...state, recipes: action.payload};
        default:
            return state;
    }
}

const defaultLogin={
    username:'',
    loggedIn:false
}

export const logUser = (state = defaultLogin, action) => {
    switch(action.type){
        case ActionTypes.LOG_IN_USER:
            return{...state, loggedIn:true, username:action.payload}
        case ActionTypes.LOG_OUT_USER:
            return{...state, loggedIn:false, username:''}
        default:
            return state;
    }
}