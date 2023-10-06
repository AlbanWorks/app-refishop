const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true
  })
  
  module.exports = withPWA({
    // next.js config
  })