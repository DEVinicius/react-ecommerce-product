import { INSERT_PRODUCT_TO_CART } from '../enum/cartAction.enum';
import { ICartItem } from './../dto/CartItem.dto';

export function insertProductToCart({product,quantity}: ICartItem) {
    return {
        type: INSERT_PRODUCT_TO_CART,
        payload: {
            product,
            quantity
        }
    }
}