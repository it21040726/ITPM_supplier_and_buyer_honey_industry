import { combineReducers } from "redux";
import buyerPostReducers from "./buyerPostReducers";
import sellerPostReducer from "./sellerPostReducer";
import categoryRecuders from "./categoryRecuders";

const rootReducer = combineReducers({
    buyerPosts: buyerPostReducers,
    sellerPosts: sellerPostReducer,
    category: categoryRecuders
})

export default rootReducer