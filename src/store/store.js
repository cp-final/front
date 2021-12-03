import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import appReducer from "./reducers/appReducer";
import thunkMW from "redux-thunk";
import dataReducer from "./reducers/dataReducer";
import filesReducer from "./reducers/filesReducer";

const reducers = combineReducers({
    app: appReducer,
    data: dataReducer,
    files: filesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMW)));

window.store = store;