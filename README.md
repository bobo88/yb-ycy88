# ycy88.com博客网站
+ <a href="http://www.ycy88.com">ycy88.com</a>

## 一、项目介绍：
### 1. 技术栈：

- `React / axios / react-redux / react-router / react-router-dom`: React 全家桶系列
- `create-react-app / react-scripts / craco`: React 打包相关
- `Typescript / sass`: JS 类型编程 / css 预处理器
- `antd`: UI 组件库

### 2. 实现功能：

- 集成：多环境配置 / Redux状态管理以及持久化 / Router路由配置 / Axios通用配置 / UI组件库等；
- 实现页面：首页 / 项目列表页面 / 关于我；
- Nginx配置；
- GitActions自动化部署配置。

## 二、项目操作：
- 安装依赖：

  ```sh
  yarn
  ```

- 运行项目：

  ```sh
  yarn serve
  ```

- 打包部署：

  ```sh
  yarn build
  ```
- 打包部署（GitActions)：

  ```sh
  git tag -a [commitId] v.[***] -m 'desc'
  git push origin v.[***]
  ```

## 三、项目预览效果截图：

<div align="center">
    <img src=./cover.png width=60% />
</div>
