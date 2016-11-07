import webpack from 'webpack';
import webpackDevMiddleware from "webpack-dev-middleware";

var compiler = webpack(require("../webpack.config.js"));

var exports = {};
exports.javascript = webpackDevMiddleware(compiler, {
	publicPath: "/dev/",
	stats: {colors: true}
});

exports.template = (req, res) => {
	return res.render(require.resolve('./views/index-dev.ejs'));
};

module.exports = exports;
