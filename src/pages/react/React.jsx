import React from 'react';
import { Empty } from 'antd';

const App = function () {
    // const [msg] = useState('我是msg信息688');
    // const [isHot, setIsHot] = useState(false);

    return (
        <div className='main-wrap'>
            <h1>React page</h1>
            <Empty 

                description={
                    <span>
                        Module upgrade ...
                    </span>
                  }
            />
        </div>
    )
}
export default App;
