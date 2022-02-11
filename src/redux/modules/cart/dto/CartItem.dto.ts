import { IProduct } from './../../product/dto/product.dto';
export interface ICartItem {
    product: IProduct;
    quantity: number;
}