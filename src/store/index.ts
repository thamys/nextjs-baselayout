import { configureStore, getDefaultMiddleware, Dispatch } from '@reduxjs/toolkit';
import { useDispatch, createSelectorHook, useStore } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { persistStore } from 'redux-persist';
import { createRootReducer, createPersistedReducer } from './ducks';

/**
 * Starting a new store instance on client or server
 * Using configureStore, store has been configured to enable using the:
 * Redux DevTools Extension to view the history of dispatched actions and how the store state changed,
 * and has had some Redux middleware included by default.
 */
export const makeStore = () => {
  const isServer = typeof window === undefined;
  if (isServer) {
    // Redux is being started on the server, keep it clean
    const store = configureStore({
      reducer: createRootReducer,
      // Add any necessary middleware here
      middleware: getDefaultMiddleware({
        serializableCheck: false
      })
    });
    return store;
  }
  // Redux is being started on the client, adding redux-persist
  const store = configureStore({
    reducer: createPersistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: false
    })
  });

  const persistor = persistStore(store);

  // Returning store with persistor inside
  return { ...store, _persistor: persistor };
};

// Creating custom types for our Redux
export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = RootStore['dispatch'];

/**
 * Export a hook that can be reused to resolve actions types
 */
export const useAppStore = () => useStore<RootStore>();

/**
 * Export a hook that can be reused to resolve actions types
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Export a hook that can be reused to resolve state types
 * Let the commented code in case we have to use shallowEqual
 */
export const useAppSelector = createSelectorHook();

/**
 * Redux Next App wrapper
 */
export const wrapper = createWrapper<RootStore>(makeStore);
