
import { createStore } from 'redux';
import { initialState } from './initial-state';
import { generalReducer } from './reducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

export const store = createStore( 
        generalReducer, 
        initialState,
        devToolsEnhancer()
        );