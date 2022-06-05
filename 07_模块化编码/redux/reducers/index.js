import { combineReducers } from "redux";
import counterReducer from "./counter_reducer";
import starReducer from "./star_reducer";

export default combineReducers({
  // 对象中的 key 为 store 中保存该状态的 key。
  count: counterReducer, 
  stars: starReducer
})