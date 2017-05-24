import { createStore } from 'redux';
import { myApp } from '../reducer';
export const store = createStore(myApp);