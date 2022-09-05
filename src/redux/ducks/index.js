import { combineReducers } from 'redux';

import Products from './products';
import Cart from './cart';


export default combineReducers({
    products: Products,
    cart: Cart,
})