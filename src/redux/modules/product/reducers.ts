import { IProduct } from './dto/product.dto';
import { Reducer } from 'redux';
import produce from "immer"

const INITIAL_STATE: IProduct = {} as IProduct; 

export const product:Reducer<IProduct> = (state = INITIAL_STATE, action) => {
    return produce(state, draft => {

    })
}