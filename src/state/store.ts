import {
  createStore,
  applyMiddleware,
  Middleware,
  combineReducers,
  Store,
} from "redux";

import { Persistor } from "redux-persist/es/types";
import reducers from "./ducks";
import { persistStore, persistCombineReducers } from 'redux-persist';

import localforage from "localforage";
import { loggerMiddleware, sagaMiddleware } from "./middlewares";
import rootSaga from "./ducks/rootSaga";

const persistConfig = {
  key: "root",
  storage: localforage,
  whiteList: ["session"],
};

const myCombineReducers = combineReducers(reducers);

export type AppState = ReturnType<typeof myCombineReducers>;

interface ConfigureStore {
  store: Store;
  persistor: Persistor;
}

export default function configureStore(initialState: any): ConfigureStore {
  
  const { myNumber, pokemon } = reducers;

  const persistedReducer = persistCombineReducers(persistConfig, {
    myNumber,
    pokemon
  });

  const middlewares: Middleware[] = [sagaMiddleware];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(loggerMiddleware);
  }

  const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
}
