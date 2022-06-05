import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 使用 Provider 包裹 App，目的是让 App 的所有后代容器组件都能使用 store。 */}
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>
);