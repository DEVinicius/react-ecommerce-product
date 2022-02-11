import { ICouponDiscount } from './../dto/couponDiscount.dto';
import { ADD_COUPON_DISCOUNT, REMOVE_PRODUCT_TO_CART } from "./../enum/cartAction.enum";
import { ICartItem } from "./../dto/CartItem.dto";
import { produce } from "immer";
import { ICartState } from "./../dto/ICartState.dto";
import { Reducer } from "redux";
import { INSERT_PRODUCT_TO_CART } from "../enum/cartAction.enum";
import { searchCouponDiscount } from './requests/searchCouponDiscount.request';

const INITIAL_STATE: ICartState = {
  cart: [],
  couponDiscount: {} as ICouponDiscount
};

export const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case INSERT_PRODUCT_TO_CART:
        const { product, quantity } = action.payload as ICartItem;

        const productCartInIndex = draft.cart.findIndex(
          (item) => item.product.id === product.id
        );

        if (productCartInIndex >= 0) {
          draft.cart[productCartInIndex].quantity =
            draft.cart[productCartInIndex].quantity + quantity;
        } else {
          draft.cart.push({
            product,
            quantity,
          });
        }

        break;

      case REMOVE_PRODUCT_TO_CART:
        const { productId } = action.payload;
        const removeProduct = draft.cart.filter(
          (product) => product.product.id !== productId
        );

        draft.cart = removeProduct;
        break;

      case ADD_COUPON_DISCOUNT:
        const { couponCode } = action.payload;
        const couponDiscount = searchCouponDiscount(couponCode);

        draft.couponDiscount = couponDiscount;
        break;
    }
  });
};
