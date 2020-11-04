   
///redux
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import allReducers from './reducers';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(allReducers, composedEnhancer);

export default store
  