const path = require('path')
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl)

module.exports = {
  webpack: {
    // 设置别名
    alias: {
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@images': pathResolve('src/assets/image'),
      '@components': pathResolve('src/components'),
      '@hooks': pathResolve('src/hooks'),
      '@pages': pathResolve('src/pages'),
      '@utils': pathResolve('src/utils')
    }
  }
}

// 参考地址： https://www.136.la/nginx/show-191778.html
// 【不建议】配置别名也可以直接在 node_modules/react-scripts 里面的 webpack.config.js里面配置，无法实现代码迁移复用，需要每次单独设置。