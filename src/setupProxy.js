// eslint-disable-next-line no-undef
const { createProxyMiddleware } = require('http-proxy-middleware');

// eslint-disable-next-line no-undef
module.exports = function(app) {
	app.use(
		'/api/v1',
		createProxyMiddleware({
			target: 'http://51.250.65.73',
			changeOrigin: true
		})
	);
};