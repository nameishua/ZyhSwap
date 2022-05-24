const path = require('path');
module.exports = {
    //选项
    //基本路径
    publicPath: "./",
    //构建时的输出目录
    outputDir: "build",
    //放置静态资源的目录
    assetsDir: "static",
    //html 的输出路径
    indexPath: "index.html",
    //文件名哈希
    filenameHashing: true,

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, './src/assets/css/mixin.less')],
        },
    },
    css: {
        loaderOptions: {
            less: {
                // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
                modifyVars: {
                    hack: `true; @import "${path.join(__dirname, './src/assets/css/vant.less')}"`,
                },
            },
        },
    },
};
