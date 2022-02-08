import { IProduct } from './product.dto';

export interface IProductState {
    product: IProduct;
    productsSameBrand: IProduct[];
}