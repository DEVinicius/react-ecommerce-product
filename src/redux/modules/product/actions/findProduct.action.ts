import { FIND_PRODUCT } from './../enum/actions.enum';

export function findProduct(id: number) {
    return {
        type: FIND_PRODUCT,
        payload: {
            id
        }     
    }
}