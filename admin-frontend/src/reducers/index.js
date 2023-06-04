import { combineReducers } from "redux";
import authReducers from "./authReducers";
import userReducers from "./userReducers";
import categoryReducers from "./categoryRecuders";
import buyerPostReducers from "./buyerPostReducers";
import sellerPostReducers from "./sellerPostReducer";

const rootReducer = combineReducers({
    auth: authReducers,
    user: userReducers,
    category: categoryReducers,
    buyerPosts: buyerPostReducers,
    sellerPosts: sellerPostReducers
})

export default rootReducer