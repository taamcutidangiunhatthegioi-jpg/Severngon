const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server MagmaNode đang chạy 24/7 ngon lành!');
});

app.listen(port, () => {
  console.log(`Server đang mở tại port ${port}`);
});

// --- BẠN CÓ THỂ DÁN CODE BOT DISCORD HOẶC CODE CỦA BẠN VÀO DƯỚI ĐÂY ---
