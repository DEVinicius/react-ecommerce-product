import { ProductActions } from '../enum/actions.enum';
import { IProduct } from './../dto/product.dto';

export function findProduct(id: number) {
    console.log(id);
    return {
        type: "FIND_PRODUCT",
        payload: {
            id
        }     
    }
}