const http = require('http');

const hostname = '127.0.0.1';
const port = 3200;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola mundo \n');
});

server.listen(port, hostname, () => {
    console.log(`El servidor está corriendo en http://${hostname}:${port}/`);
});
