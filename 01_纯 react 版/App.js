import React, { Component } from "react";
import { Select, Button } from "antd";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
      count: 0
    };
  }

  handleSelect(value) {
    this.setState({
      selected: value * 1
    })
  }

  increase() {
    const { selected, count } = this.state;
    this.setState({
      count: count + selected
    });
  }

  decrease() {
    const { selected, count } = this.state;
    this.setState({
      count: count - selected
    });
  }

  increaseIfOdd() {
    if (this.state.count % 2 === 1) {
      this.increase()
    };
  }

  increaseAsync() {
    setTimeout(() => {
      this.increase()
    }, 1000);
  }

  render() {
    const { count } = this.state;
    const { Option } = Select;
    return (
      <div className="app">
        <h2>当前计数：{count}</h2>
        <Select defaultValue="1" style={{ width: 120 }} onSelect={(value) => this.handleSelect(value)}>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
        </Select>
        <Button type="primary" onClick={() => this.increase()}>+</Button>
        <Button type="primary" onClick={() => this.decrease()}>-</Button>
        <Button type="primary" onClick={() => this.increaseIfOdd()}>Increase If Odd</Button>
        <Button type="primary" onClick={() => this.increaseAsync()}>Increase Async</Button>
      </div>
    )
  }
}