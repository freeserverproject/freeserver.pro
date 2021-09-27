require = require('esm')(module);
const routes = require('./src/router/routes').default;

module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "FREESERVER",
    }
  },
  pluginOptions: {
    sitemap: {
      baseURL: 'https://freeserver.pro',
      routes
    }
  },
  publicPath: './'
}
