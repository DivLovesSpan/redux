import { INCREMENT, DECREMENT } from "../action_types";

const initState = 0;
export default function reducer(preState = initState, action) {
  const { type, data } = action;
  // 在 reducer 中不能直接修改传递过来的参数。
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}