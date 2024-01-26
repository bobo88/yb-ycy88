import React from 'react';
import { Empty } from 'antd';
import './cases.scss'

const ProjectCases = function () {
    return (
        <div className='main-wrap project-cases-box'>
            <Empty 
                imageStyle={{
                    height: 200,
                }}
                description={
                    <span style={{
                        fontSize: '16px',
                        color: '#2095cd'
                    }}>
                        Module upgrade (模块升级中) ...
                    </span>
                  }
            />
        </div>
    )
}
export default ProjectCases;
