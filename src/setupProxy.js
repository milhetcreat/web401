const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://milhet.alwaysdata.net',
      changeOrigin: true,
    })
  );
};