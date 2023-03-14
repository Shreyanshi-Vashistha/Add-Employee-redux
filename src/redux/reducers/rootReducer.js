import { combineReducers } from "redux";
import empDetail from "./getDataReducer";

const rootReducer = combineReducers({
    data: empDetail,

})
console.log("root reducer")

export default rootReducer