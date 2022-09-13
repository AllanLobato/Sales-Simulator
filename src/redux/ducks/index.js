import { combineReducers } from 'redux';

import Products from './products';
import Cart from './cart';
import Client from './client'


export default combineReducers({
    products: Products,
    cart: Cart,
    client: Client,
})