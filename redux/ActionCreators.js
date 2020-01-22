import * as ActionTypes from './ActionTypes'
import { baseURL } from '../baseURL'


export const fetchRecipes = () => dispatch => {
    return fetch(baseURL + 'recipes')
    .then(res => res.json())
    .then(recipes => dispatch(addRecipes(recipes)));
 }

 
 export const addRecipes = (recipes) => ({
     type: ActionTypes.ADD_RECIPES,
     payload: recipes
 })


 export const logInUser=(username)=>({
     type:ActionTypes.LOG_IN_USER,
     payload:username
 })

 export const logOutUser=(username)=>({
    type:ActionTypes.LOG_OUT_USER,
    payload:username
})

export const addFavoriteRecipe=(recipeId)=>({
    type:ActionTypes.ADD_FAVORITE,
    payload:recipeId
})
