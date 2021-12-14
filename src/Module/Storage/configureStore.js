//
// configureStore.js
// shuwashuwa-net
//
// created by Hirate99 on 2021/12/14
//

import {createStore} from 'redux'
import {persistStore, persistReducer} from "redux-persist"
import storage from 'redux-persist/lib/storage'

import {loginReducer} from './Reducers'

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: [],
}

const reducers = persistReducer(persistConfig, loginReducer)

export const store = createStore(reducers)
export const persistor = persistStore(store)
