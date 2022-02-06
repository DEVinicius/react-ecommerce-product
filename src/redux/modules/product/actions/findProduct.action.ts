import { ProductActions } from '../enum/actions.enum';
import { IProduct } from './../dto/product.dto';

export function insertProduct(product: IProduct) {
    return {
        type: ProductActions.FIND_PRODUCT,
        payload: {
            product
        }     
    }
}