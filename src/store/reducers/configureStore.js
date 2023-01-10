import {applyMiddleware, compose, createStore} from 'redux';
import thunk from "redux-thunk";
import reducers from './index';

export default function configureStore() {
    return createStore(reducers, compose(applyMiddleware(thunk)));
}
