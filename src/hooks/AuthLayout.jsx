import React from 'react';
import { Button } from 'antd';
const msg = '我是msg信息 688'

// 类组件
class App extends React.Component {
    /**
     * @param {any} props
     */
    constructor(props) {
        super(props)
        this.state = {
            isHot: true
        };
    }
    render() {
        console.log(this);
        const { isHot } = this.state;
        return (
            <div>
                <h1>我是权限页面</h1>
                <p className={ isHot ? 'red' : 'green' }>{ msg }</p>
                <p className='desc'>今天的天气真 <span className={ isHot ? 'red' : 'green' }>{ isHot ? '炎热' : '凉爽'}</span></p>
                <button onClick={ this.changeState.bind(this) } style={{ margin: '0 20px 0 0' }}>changeState</button>
                <input type="text" style={{marginRight: '20px'}} />
                <Button type="primary">Button 6</Button>
                <Button type="primary">Button 8</Button>
            </div>
        );
    }

    changeState() {
        console.log(this.state)
        this.setState({
            isHot: !this.state.isHot
        })
        // this.state = { isHot: false}
    }
}

export default App;