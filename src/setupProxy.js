const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/animaux',
    createProxyMiddleware({
      target: 'https://milhet.alwaysdata.net',
      changeOrigin: true,
      pathRewrite: {
        '^/api/animaux': '/sae401/api/animaux', // Remplacez si nécessaire
      },
    })
  );
};