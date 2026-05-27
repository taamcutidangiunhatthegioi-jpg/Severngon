const express = require('express');
const mineflayer = require('mineflayer');
const app = express();
const port = process.env.PORT || 3000;

// 1. Tạo Web Server phục vụ cron-job.org giữ mạng 24/7
app.get('/', (req, res) => {
  res.send('Server Web va Bot Minecraft dang hoat dong 24/7!');
});

app.listen(port, () => {
  console.log(`Server dang mo tai port ${port}`);
});

// 2. Cấu hình Bot Minecraft vào server MagmaNode của bạn
const botOptions = {
  host: 'dynamic-8.magmanode.com', // IP server của bạn
  port: 25852,                     // Port server của bạn
  username: 'Taamcutidangiu',      // Tên của bot
  version: false                   // Tự động nhận diện phiên bản server
};

let bot;

function createBot() {
  bot = mineflayer.createBot(botOptions);

  bot.on('login', () => {
    console.log(`[Bot] ${bot.username} da dang nhap vao server thanh cong!`);
  });

  // Tự động nhảy hoặc đi lại nhẹ để tránh bị hệ thống tính là AFK
  bot.on('spawn', () => {
    console.log('[Bot] Da vao the gioi game.');
    setInterval(() => {
      if (bot) {
        bot.setControlState('jump', true);
        setTimeout(() => bot.setControlState('jump', false), 500);
      }
    }, 10000); // Cứ 10 giây nhảy 1 lần để chống AFK
  });

  bot.on('chat', (username, message) => {
    if (username === bot.username) return;
    console.log(`[Chat] ${username}: ${message}`);
  });

  // TỰ ĐỘNG KẾT NỐI LẠI: Nếu server MagmaNode bị restart hoặc bot bị đá, bot sẽ tự vào lại sau 15 giây
  bot.on('end', () => {
    console.log('[Bot] Mat ket noi! Dang tien hanh ket noi lai sau 15 giay...');
    setTimeout(createBot, 15000);
  });

  bot.on('error', (err) => {
    console.log('[Bot Lỗi]: ', err);
  });
}

// Chạy bot
createBot();
