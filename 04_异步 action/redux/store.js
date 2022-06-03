import { createStore, applyMiddleware } from "redux";
// redux-thunk 用于解决 store 执行不了异步 action。
import thunk from "redux-thunk";
import reducer from "./reducer";

export default createStore(reducer, applyMiddleware(thunk));