import React, { useState, useEffect } from 'react';

// class 组件
export default class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    componentDidMount() {
        console.log('======= componentDidMount ===========')
      document.title = `You clicked ${this.state.count} times`;
    }
    componentDidUpdate() {
        console.log('======= componentDidUpdate ===========')
      document.title = `You clicked ${this.state.count} times`;
    }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
        </div>
      );
    }
}

export const ExampleHook = function () {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('======= useEffect ===========')
        return () => {
            console.log('清除============')
        }
    })
    return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
    )
}