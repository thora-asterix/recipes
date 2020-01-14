import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { recipes } from './recipes'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers(
            {
                
                recipes
            }
        ),
        applyMiddleware(thunk)
    );
    return store;
}