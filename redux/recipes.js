import * as  ActionTypes from './ActionTypes';

export const recipes = (state = {recipes: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_RECIPES: 
        return { ...state, recipes: action.payload};
        default:
            return state;
    }
}