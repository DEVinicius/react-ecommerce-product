import { IProductState } from './../dto/productState.dto';
import { ProductActions } from '../enum/actions.enum';
import { IProduct } from '../dto/product.dto';
import { Reducer } from 'redux';
import produce from "immer"

import { findProductReducer } from './findProduct.reducer';
const INITIAL_STATE: IProductState = {
    product: {} as IProduct
}; 

export const product:Reducer<IProductState> = (state = INITIAL_STATE, action) => {
    return produce(state, draft => {
        switch(action.type) {
            case "FIND_PRODUCT":
                const product = findProductReducer() as IProduct;
                return {
                    ...state,
                    product
                }
                break;
        }
    })
}