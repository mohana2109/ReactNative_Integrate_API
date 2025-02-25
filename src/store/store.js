// src/store/store.js
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {thunk} from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

// Create Redux store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
