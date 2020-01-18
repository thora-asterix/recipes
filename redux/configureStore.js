import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { recipes } from './recipes'


export const ConfigureStore = () => {
    // const middleware = [thunk]
    const store = createStore(
        combineReducers(
            {
                
                recipes
            }
        ),
       compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
       )
    );
    return store;
}