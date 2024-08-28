import { combineReducers } from 'redux';
import ProductSlice from './products/ProductSlice';

const rootReducer = combineReducers({
    products: ProductSlice
});

export default rootReducer;
