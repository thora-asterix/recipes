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


 export const logInUser=()=>({
     type:ActionTypes.LOG_IN_USER
 })