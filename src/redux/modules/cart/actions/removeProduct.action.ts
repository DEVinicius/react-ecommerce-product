import { REMOVE_PRODUCT_TO_CART } from './../enum/cartAction.enum';
export function removeProductCart(productId: number) {
    return {
        type: REMOVE_PRODUCT_TO_CART,
        payload: {
            productId
        }
    }
}