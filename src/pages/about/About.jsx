import React from 'react'
// import { Timeline } from 'antd'
import './about.scss'

import SuperImg from '@/assets/image/super.jpg'

const About = function () {
  return (
    <div className="main-wrap about-box">
      <h1>可以正常查看这个页面啦！</h1>
      <img src={SuperImg} alt="SUPER" className="super-img" />
      {/* <Timeline>
                <Timeline.Item>近10年的前端开发工作经验，追求“凡事必有回响”；</Timeline.Item>
                <Timeline.Item>精通主流的前端技术栈：VUE全家桶、React全家桶、Typescript、Nuxt、Sass、Node/Express/Koa等</Timeline.Item>
                <Timeline.Item>精通主流的前端自动化打包工具和流程：Gulp、Webpack、Rollup、Vite、GitActions、Nginx等</Timeline.Item>
                <Timeline.Item>熟悉前端主流的UI组件库：ElementUI、Antd、Vant、Echarts等</Timeline.Item>
                <Timeline.Item>有PHP、Node/Express/Koa、React等多种方式搭建博客网站的经验，涉及MySQL、pm2、Nginx等技术</Timeline.Item>
                <Timeline.Item>喜爱搭建脚手架简化工作流程，喜爱输出技术文档思维导图（x-mind的狂热爱好者）</Timeline.Item>
                <Timeline.Item>热衷技术能力“充电”，爱捣鼓</Timeline.Item>
                <Timeline.Item>喜爱自驾游</Timeline.Item>
                <Timeline.Item>Talk is cheap, show me the code!</Timeline.Item>
            </Timeline> */}
    </div>
  )
}
export default About
