import { combineReducers, Action, Reducer } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";
import { persistReducer } from "redux-persist";
// Reducers list
import reducerList from "./reducers";

// Redux-persist base config
const rootPersistConfig = {
  key: "root",
  blacklist: [],
  stateReconciler: autoMergeLevel1,
  storage,
};

/**Default config to not persist loading and error */
const defaultPersistConfig = (key: string) => ({
  key: key,
  storage: storage,
  blacklist: ["loading", "error"],
  stateReconciler: autoMergeLevel1,
});

type ReducerList = typeof reducerList;

/**
 * Generating the combined persist list using the blacklist
 * @param reducers object with of all reducers
 */
const generatePersistedReducer = (reducers: ReducerList) => {
  const persistedReducer = reducers;
  for (const key in reducers) {
    type ReducerKey = keyof ReducerList;
    if (rootPersistConfig.blacklist.indexOf(key) < 0) {
      // Reducer not on the blacklist, persisting it...
      const reducer = persistedReducer[key as ReducerKey] as Reducer;
      //@ts-ignore
      persistedReducer[key as ReducerKey] = persistReducer(
        defaultPersistConfig(key),
        reducer
      );
    }
  }
  return combineReducers(persistedReducer);
};

// Pure reducers and persisted reducers
const combineRootReducers = combineReducers(reducerList);
const combinePersistedReducers = generatePersistedReducer(reducerList);
type CombinedState = Parameters<typeof combineRootReducers>[0];

/**
 * Update WHOLE state for some actions
 * @param state app state
 * @param action every app action
 */
const getCustomStateFromAction = (state: CombinedState, action: Action) => {
  if (action.type === "auth/logout/fulfilled") {
    return {} as CombinedState;
  }
  return state;
};

/** Reducers on server side */
export const createRootReducer = (state: CombinedState, action: Action) => {
  const newState = getCustomStateFromAction(state, action);
  return combineRootReducers(newState, action);
};

// /** Reducers on client side */
export const createPersistedReducer = persistReducer<CombinedState>(
  rootPersistConfig,
  (state, action) => {
    return combinePersistedReducers(
      getCustomStateFromAction(state, action),
      action
    );
  }
);
