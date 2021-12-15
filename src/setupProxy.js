const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://shuwashuwa.kinami.cc',
            changeOrigin: true,
            pathRewrite: {
                '^/api':'/'
            }
        })
    )
}