module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    devtool: 'source-map',
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dotrunghieu2151.github.io/'
    : '/'
}
