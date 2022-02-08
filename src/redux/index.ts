import { IProductAnnouncementState } from './modules/productAnnouncement/dto/productAnnouncementState.dto';
import { IProductState } from './modules/product/dto/productState.dto';
import reducers from './modules/index';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

export interface IStore {
    product: IProductState
    productAnnouncement: IProductAnnouncementState
}

export const store = createStore(reducers, composeWithDevTools())