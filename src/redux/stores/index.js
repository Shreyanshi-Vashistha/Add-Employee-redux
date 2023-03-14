import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import reduxThunk from 'redux-thunk'
import logger from "redux-logger";


const middleware = [reduxThunk]
middleware.push(logger)


const store = createStore(rootReducer, applyMiddleware(...middleware))

console.log("store")

export default store