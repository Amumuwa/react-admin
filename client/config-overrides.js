// 引入需要的模块
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path')

module.exports =override (
    // 针对 antd 实现按需打包：根据 import 的内容进行打包（使用 babel-plugin-import）
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true    // 自动打包组件的相关样式
    }),

    // 使用 less-loader 对源码 antd 中的 less 变量重新赋值
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#0099CC' } // 自定义全局基色（主题）
    }),

    // 配置路径别名
    addWebpackAlias({
        'styles': path.join(__dirname, './src/styles'),
        '@': path.join(__dirname, './src/components'),
        'imgs': path.join(__dirname, './src/imgs')
    })
)