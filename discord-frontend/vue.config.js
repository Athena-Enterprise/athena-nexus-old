const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: ['nexus.athenanetwork.gg'],
    host: '0.0.0.0', // Bind to all interfaces
    port: 8080,
    proxy: 'http://localhost:3001', // Proxy for backend API
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/dev/' : '/'
})
