import { IShopkeeper } from './shopkeeper.dto';
import { IBrand } from './brand.dto';
export interface IProduct {
    id: number;
    product_name: string;
    brand: IBrand;
    quantity: number;
    originalPrice: string;
    promotionPrice: string;
    shopkeeper: IShopkeeper;
}
