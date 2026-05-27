const http = require('http');
setInterval(() => {
  http.get(`http://localhost:${process.env.PORT || 3000}`);
}, 240000);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot dang hoat dong!\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server web dang chay tai port ${PORT}`);
});
