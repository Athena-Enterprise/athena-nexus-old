const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: ['nexus.athenanetwork.gg'],
    host: '0.0.0.0', // This allows external access
    port: 8080, // Development server port
    proxy: {
      '/dev': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: { '^/dev': '/' }, // Rewrite /dev/ path
        secure: false,
      },
    },
  },
})
