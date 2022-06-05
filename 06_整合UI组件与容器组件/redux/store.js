import { createStore, applyMiddleware } from "redux";
// redux-thunk 用于解决 store 执行不了异步 action 的问题。
import thunk from "redux-thunk";
import reducer from "./reducer";

export default createStore(reducer, applyMiddleware(thunk));