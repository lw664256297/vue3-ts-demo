module.exports = {
    devServer: {
        proxy: {
            // 请求代理服务器
            "/api": {
            //前缀
            target: "http://127.0.0.1:7001", //代理目标地址
            changeOrigin: true,
            pathRewrite: {
                // 在发出请求后将/api替换为''空值，这样不影响接口请求
                "^/api": " ",
            },
            },
        },
        port: 8080, //指定端口
        hot: true, // 开启热更新
        https: false, // 是否开启https模式
    },
}