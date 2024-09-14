const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      'nexus.athenanetwork.gg'
    ],
    host: '127.0.0.1', // Force bind to IPv4 loopback address
    port: 8080, // Development server port
    proxy: 'http://localhost:3001', // Adjust this to match the backend API if needed
  }
});
