import React from "react";
import { Divider, Button, } from 'antd';


const Skills = () => {
  return (
    <div className="project-cases-box mb20">
      <Divider orientation="left">项目源码 / DEMO</Divider>

      <a className="inline-block mr20 mb5" href="https://github.com/bobo88/project-basis/tree/main/vue3-multi-page" target='_blank' rel="noreferrer">
        <Button type="primary">Vue3多页面配置项目</Button>
      </a>
      <a className="inline-block mr20 mb5" href="https://github.com/bobo88/test-actions" target='_blank' rel="noreferrer">
        <Button type="primary">React 博客项目</Button>
      </a>
      <a className="inline-block mr20 mb5" href="https://github.com/bobo88/project-basis/tree/main/echarts-basis" target='_blank' rel="noreferrer">
        <Button type="primary">Echarts实现数据可视化</Button>
      </a>
      <a className="inline-block mr20 mb5" href="https://github.com/bobo88/nuxt-web" target='_blank' rel="noreferrer">
        <Button type="primary">Nuxt搭建 PC/M 适配项目</Button>
      </a>
      <a className="inline-block mr20 mb5" href="https://github.com/bobo88/project-basis/tree/main/rollup-basis" target='_blank' rel="noreferrer">
        <Button type="primary">Rollup + Gulp + TS 配置项目</Button>
      </a>
      <a className="inline-block mr20 mb5" href="https://github.com/bobo88/yuanbo_web" target='_blank' rel="noreferrer">
        <Button type="primary">Node/Koa/Nuxt开发的网站</Button>
      </a>
      <a className="inline-block mr20 mb5" href="https://github.com/bobo88/project-basis/tree/main/html2canvas-basis" target='_blank' rel="noreferrer">
        <Button type="primary">将HTML转成canvas图片</Button>
      </a>
      <a className="inline-block mr20 mb5" href="https://github.com/bobo88/project-basis/tree/main/vue3-vite-app" target='_blank' rel="noreferrer">
        <Button type="primary">搭建移动端的Vue3项目</Button>
      </a>
      <a className="inline-block mr20 mb5" href="https://github.com/bobo88/xmind-web" target='_blank' rel="noreferrer">
        <Button type="primary">x-mind的技术类思维导图</Button>
      </a>
    </div>
  )
};
export default Skills;

