import React, { Component } from 'react';
import { Button } from 'antd';
import Child from './Child';

const parentStyle = {
  padding: 40,
  margin: 20,
  backgroundColor: 'LightCyan',
};

const NAME = 'Parent 组件：';

export default class Parent extends Component {
  constructor() {
    super();
    console.log(NAME, 'constructor');
    this.state = {
      count: 0,
      mountChild: true,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(NAME, 'getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log(NAME, 'componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(NAME, 'shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(NAME, 'getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(NAME, 'componentDidUpdate');
  }

  componentWillUnmount() {
    console.log(NAME, 'componentWillUnmount');
  }

  /**
   * 修改传给子组件属性 count 的方法
   */
  changeNum = () => {
    let { count } = this.state;
    this.setState({
      count: ++count,
    });
  };

  /**
   * 切换子组件挂载和卸载的方法
   */
  toggleMountChild = () => {
    const { mountChild } = this.state;
    this.setState({
      mountChild: !mountChild,
    });
  };

  render() {
    console.log(NAME, 'render');
    const { count, mountChild } = this.state;
    return (
      <div style={parentStyle}>
        <div>
          <h3>父组件</h3>
          <Button onClick={this.changeNum}>改变传给子组件的属性 count</Button>
          <br />
          <br />
          <Button onClick={this.toggleMountChild}>卸载 / 挂载子组件</Button>
        </div>
        {mountChild ? <Child count={count} /> : null}
      </div>
    );
  }
}