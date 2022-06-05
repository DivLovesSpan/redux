import { INCREMENT, DECREMENT } from "./action_types";

export const increment = value => ({ type: INCREMENT, data: value });
export const decrement = value => ({ type: DECREMENT, data: value });
export const incrementAsync = (value, delayTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(value));
    }, delayTime)
  }
}