const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const port = process.env.PORT || 10000;

proxy.on('error', function (err, req, res) {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });
 
  console.log('ojoj');
  res.end('Something went wrong. And we are reporting a custom error message.');
});

http.createServer(function(req, res) {
  console.log('Request', req.method, req.url);

  try{
    proxy.web(req, res, { target: `${req.url}` });
  }

  catch(e){
    console.log(e);
  }

}).listen(port);