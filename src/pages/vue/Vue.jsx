import React, { useState } from 'react';
import { Button } from 'antd';

const App = function () {
    const [msg] = useState('我是msg信息688');
    const [isHot, setIsHot] = useState(false);

    return (
        <div className='main-wrap'>
            <h1>Vue page</h1>
            <p className={ isHot ? 'red' : 'green' }>{ msg }</p>
            <p className='desc'>今天的天气真 <span className={ isHot ? 'red' : 'green' }>{ isHot ? '炎热' : '凉爽'}</span></p>
            <button onClick={ () => setIsHot(!isHot) } style={{ margin: '0 20px 0 0' }}>changeState</button>
            <input type="text" style={{marginRight: '20px'}} />
            <Button className='mr20' type="primary">Button 6</Button>
            <Button type="primary">Button 8</Button>
        </div>
    )
}
export default App;
