import { IProductState } from './modules/product/dto/productState.dto';
import reducers from './modules/index';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

export interface IStore {
    product: IProductState
}

export const store = createStore(reducers, composeWithDevTools())