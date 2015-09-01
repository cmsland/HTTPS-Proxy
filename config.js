// Rather than parsing a JSON file, configuration for the HTTPS proxy will
// be handled in good old javascript.
// As you can see, at the most basic level, that doesn't change much.
module.exports = {
  port: 5641, // reversed(str(sum(map(ord, 'HTTPSEverywhere'))))
  address: '127.0.0.1',

  // Configuration options for requests. See
  // https://github.com/request/request#requestoptions-callback
  followRedirect: true,
  followAllRedirects: false,
  maxRedirects: 5,
  useProxy: true,
  proxy: 'http://localhost:8080', // Doesn't get set if useProxy is false
  strictSSL: true,
  useTunnel: false,
  tunnel: null // Doesn't get set if useTunnel is false
};
