import React, { Component } from "react";
import Counter from "./components/Counter";
import "./App.css";

export default class App extends Component {
  render() {
    return <Counter store={ this.props.store } />
  }
}