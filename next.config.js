// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://rasofficial.test/wp-json/wc/v3/:path*", // Proxy to WooCommerce API
      },
    ];
  },
};
