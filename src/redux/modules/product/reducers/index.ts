import { IProduct } from './../dto/product.dto';
import { FIND_PRODUCT, FIND_PRODUCT_SAME_BRAND } from "./../enum/actions.enum";
import { IProductState } from "./../dto/productState.dto";
import { Reducer } from "redux";
import produce from "immer";
import { findProductReducer } from "./requests/findProduct.reducer";
import { FindProductsSameBrandRequest } from './requests/findProductsSamebrand.request';

const INITIAL_STATE: IProductState = {
  product: {} as IProduct,
  productsSameBrand: [] as IProduct[]
};

export const product: Reducer<IProductState> = (
  state = INITIAL_STATE,
  action
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case FIND_PRODUCT:
        const product = findProductReducer(action.value) as IProduct;
        draft.product = product
        break;

      case FIND_PRODUCT_SAME_BRAND:
        const productsSameBrand = FindProductsSameBrandRequest(action.value);
        draft.productsSameBrand = productsSameBrand;

        break;
    }
  });
};
