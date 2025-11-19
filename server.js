
require('dotenv').config(); // Load biến môi trường từ .env
const express = require('express');
const connectDB = require('./src/config/db.config');
const apiRoutes = require('./src/routes/index'); // Lấy router tổng

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware cơ bản
app.use(express.json()); // Cho phép Express đọc JSON body
app.use(express.urlencoded({ extended: true })); // Cho phép Express đọc form data

// Kết nối Database
connectDB();

// Định nghĩa tuyến đường chính
app.use('/api', apiRoutes); // Tất cả API sẽ bắt đầu bằng /api

// Tuyến đường mặc định (Optional)
app.get('/', (req, res) => {
    res.send('Welcome to YouTube Clone API');
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});