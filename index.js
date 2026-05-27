const http = require('http');

// 1. Tạo Server Web phục vụ cho cron-job.org gọi đến
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot Minecraft dang hoat dong 24/7!\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server web dang mo tai port ${PORT}`);
});

// 2. ĐOẠN CODE CHẠY BOT MINECRAFT CỦA BẠN (DÁN XUỐNG DƯỚI NÀY)
// Hãy dán toàn bộ code Bot cũ (mineflayer) của bạn vào ngay dưới dòng này nhé!

