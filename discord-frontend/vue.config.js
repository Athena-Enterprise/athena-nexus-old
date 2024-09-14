const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: ['nexus.athenanetwork.gg'],
    host: '0.0.0.0',  // Allows external access
    port: 8080,  // Development server port
    proxy: 'http://localhost:3001',  // Proxy API requests
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/dev/' : '/'
});
