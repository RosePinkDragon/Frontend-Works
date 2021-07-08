import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk'
import combinedReducers from "./combinedReducers"; 

const initialState = {
     //?? add initial states here
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    combinedReducers, initialState, composeEnhancer(applyMiddleware(thunk))
)

export default store