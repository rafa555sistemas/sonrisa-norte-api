const http = require('http'); http.createServer((req, res) => { res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }); res.end('Sonrisa Norte - API v1'); }).listen(3000, '0.0.0.0')
