const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      'nexus.athenanetwork.gg'
    ],
    host: '0.0.0.0', // This allows external access
    port: 8080, // You can change this if necessary
  }
})
