const http = require('http');

const hostname = '0.0.0.0'; // Listen on all interfaces
const port = 8080; // This port should match EXPOSE in Dockerfile

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Jenkins CI/CD!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});