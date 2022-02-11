import { address } from './address/reducers/index';
import { cart } from './cart/reducers/index';
import { productAnnouncement } from './productAnnouncement/reducers/index';
import { product } from './product/reducers';
import { combineReducers } from "redux";

export default combineReducers({
    product,
    productAnnouncement,
    cart,
    address
});