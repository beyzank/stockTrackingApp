import {combineReducers} from 'redux';
import products from './products';

const reducers = combineReducers({
    products: products,
});
export default reducers;
