const { override, fixBabelImports, addLessLoader } = require('customize-cra');

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
        modifyVars: { '@primary-color': '#1DA57A' } // 自定义全局基色（主题）
    })
)