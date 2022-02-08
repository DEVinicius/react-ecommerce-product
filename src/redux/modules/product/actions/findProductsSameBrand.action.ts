import { FIND_PRODUCT_SAME_BRAND } from './../enum/actions.enum';
export function findProductsSameBrand(brand: string) {
    return {
        type: FIND_PRODUCT_SAME_BRAND,
        payload: {
            brand
        } 
    }
}