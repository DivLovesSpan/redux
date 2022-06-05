import { connect } from "react-redux";
import Counter from "../../components/Counter";
import { increment, decrement, incrementAsync } from "../../redux/action_creators";

// 完整版
// function mapStateToProps(state) {
//   return { count: state };
// }
// 简写版
// const mapStateToProps = state => ({ count: state });

// 完整版
// function mapDispatchToProps(dispatch) {
//   return {
//     increment: value => dispatch(increment(value)),
//     decrement: value => dispatch(decrement(value)),
//     incrementAsync: value => dispatch(incrementAsync(value))
//   };
// }
// 简写版
// const mapDispatchToProps = dispatch => ({
//   increment: value => dispatch(increment(value)),
//   decrement: value => dispatch(decrement(value)),
//   incrementAsync: value => dispatch(incrementAsync(value))
// })

// 完整版
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// 简写版
export default connect(
  state => ({ count: state }),
  {
    increment: increment, // 此时属性 increment 是 ƒ () { return dispatch(actionCreator(...arguments)); }
    decrement: decrement, // 此时属性 decrement 是 ƒ () { return dispatch(actionCreator(...arguments)); }
    incrementAsync: incrementAsync // 此时属性 incrementAsync 是 ƒ () { return dispatch(actionCreator(...arguments)); }
  }
)(Counter);