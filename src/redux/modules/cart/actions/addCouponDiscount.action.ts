import { ICouponDiscount } from './../dto/couponDiscount.dto';
import { ADD_COUPON_DISCOUNT } from './../enum/cartAction.enum';

export function AddCouponDiscount(couponCode: string) {
    return {
        type: ADD_COUPON_DISCOUNT,
        payload: {
            couponCode
        }
    }
}