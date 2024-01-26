import React from 'react'
import { Col, Row } from 'antd'
// import { FunctionOutlined } from '@ant-design/icons'
import { Link, NavLink } from 'react-router-dom'

const Top = () => {
  return (
    <div className="top-box">
      <div>
        <Row>
          <Col span={6}>
            <Link to="/" className="link">
              {/* <FunctionOutlined style={{ fontSize: '32px', color: '#fff' }} /> */}
              <span className="logo-desc">V8程序员</span>
            </Link>
          </Col>
          <Col span={18}>
            {/* target="_blank" rel="noopener noreferrer" */}
            <a className="link" href="//fe.ycy88.com" target="_blank">
              博客文档
            </a>
            {/* <NavLink to='home' className={(navData) => (navData.isActive ? 'active link' : 'link')}>Docs</NavLink> */}
            <NavLink
              to="js-run"
              className={(navData) =>
                navData.isActive ? 'active link' : 'link'
              }>
              JS网页运行模拟器
            </NavLink>
            {/* <NavLink to='react' className={(navData) => (navData.isActive ? 'active link' : 'link')}>React</NavLink>
            <NavLink to='other' className={(navData) => (navData.isActive ? 'active link' : 'link')}>Other</NavLink> */}
            {/* <NavLink
              to="about-me"
              className={(navData) =>
                navData.isActive ? 'active link' : 'link'
              }>
              关于我
            </NavLink> */}
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default Top
