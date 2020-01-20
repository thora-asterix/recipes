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
    loggedIn:false
}

export const logIn = (state = defaultLogin, action) => {
    switch(action.type){
        case ActionTypes.LOG_IN_USER:
            return{...state, loggedIn:true}
        default:
            return state;
    }
}