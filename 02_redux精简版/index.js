import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={ store } />
  </React.StrictMode>
);

// 监测 redux 中状态的改变，如果 redux 的状态发生了改变，那么重新渲染 App 组件。
store.subscribe(() => {
  root.render(
    <React.StrictMode>
      <App store={ store } />
    </React.StrictMode>
  );
});
