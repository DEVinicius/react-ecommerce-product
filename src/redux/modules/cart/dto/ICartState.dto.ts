import { ICouponDiscount } from './couponDiscount.dto';
import { ICartItem } from "./CartItem.dto";

export interface ICartState {
    cart: ICartItem[];
    couponDiscount: ICouponDiscount
}