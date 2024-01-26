import React from 'react';
import { Timeline, Row, Col } from 'antd';
import Parent from '@/components/cases/lifecircle/Parent'
import ExampleClass, { ExampleHook } from '@/components/cases/hook/index'
import ReduxTest from '@/components/cases/redux-test/index'

const App = function () {
    // const [msg] = useState('Nginx 负载均衡 Test');

    return (
        <div className='main-wrap'>
            <h1>Other page</h1>
            <Timeline>
                <Timeline.Item>
                    <p>DEMO -- 父子组件生命周期</p>
                    <Parent />
                </Timeline.Item>
                <Timeline.Item>
                    <p>DEMO -- Hook useState/useEffect VS class组件</p>
                    <Row>
                        <Col span={12}>
                            <h3>我是Class定义的组件</h3>
                            <ExampleClass />
                        </Col>
                        <Col span={12}>
                            <h3>我是Hook定义的组件</h3>
                            <ExampleHook />
                        </Col>
                    </Row>
                </Timeline.Item>
                <Timeline.Item>
                    <p>DEMO -- Redux Test</p>
                    <ReduxTest />
                </Timeline.Item>
            </Timeline>
        </div>
    )
}
export default App;
