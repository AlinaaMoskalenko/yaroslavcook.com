import { createStore } from 'redux';
import viewerReducer from './reducers/viewer';

const store = createStore(viewerReducer);

export default store;