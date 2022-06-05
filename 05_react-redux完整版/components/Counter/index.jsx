import React, { Component } from "react";
import { Select, Button } from "antd";
import "./index.css";

export default class Count extends Component {
  state = {
    selected: 1
  };

  handleSelect(value) {
    this.setState({
      selected: value * 1
    })
  }

  componentDidMount() {
    console.log(this.props.increment);
    console.log(this.props.decrement);
    console.log(this.props.incrementAsync);
  }

  increase() {
    const { selected } = this.state;
    this.props.increment(selected * 1 );
  }

  decrease() {
    const { selected } = this.state;
    this.props.decrement(selected * 1 );
  }

  increaseIfOdd()  {
    const { count } = this.props;
    if (count % 2 === 1) {
      this.increase();
    }
  }

  increaseAsync() {
    const { selected } = this.state;
    this.props.incrementAsync(selected * 1, 1000);
  }
  
  render() {
    const count = this.props.count;
    const { Option } = Select;
    return (
      <div className="count">
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