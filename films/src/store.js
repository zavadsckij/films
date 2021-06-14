import {createStore, applyMiddleware} from "redux"
import {filmsReducer} from './filmsReducer'
import thunkMiddleware from 'redux-thunk'




let store = createStore(filmsReducer, applyMiddleware(thunkMiddleware))

export default store;