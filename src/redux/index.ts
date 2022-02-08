import { IProductAnnouncementState } from './modules/productAnnouncement/dto/productAnnouncementState.dto';
import { IProductState } from './modules/product/dto/productState.dto';
import reducers from './modules/index';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [
        "productAnnouncement"
    ]
};


const persistedReducer = persistReducer(persistConfig, reducers);

export interface IStore {
    product: IProductState
    productAnnouncement: IProductAnnouncementState
}

const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store);

export { store, persistor };