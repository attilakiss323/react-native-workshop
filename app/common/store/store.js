import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import epics from './epics';
import reducers from './reducers';

const rootReducer = combineReducers(reducers);


export default initialState => createStore(rootReducer, initialState, applyMiddleware(createEpicMiddleware(epics)))
