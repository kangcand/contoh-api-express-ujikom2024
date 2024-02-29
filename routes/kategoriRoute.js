// kategoriRoute.js
// Mengimpor modul express dan membuat router
const express = require('express');
const router = express.Router();

// Mengimpor controller kategori
const kategoriController = require('../controllers/kategoriController');

// Mengimpor middleware untuk verifikasi token
const { verifyToken } = require('../middleware/verify');

// Definisi rute-rute CRUD untuk kategori dengan memerlukan token verifikasi
router.get('/', verifyToken, kategoriController.index); // Mendapatkan daftar kategori
router.get('/:id', verifyToken, kategoriController.show); // Mendapatkan detail kategori berdasarkan ID
router.post('/', verifyToken, kategoriController.store); // Menyimpan kategori baru
router.put('/:id', verifyToken, kategoriController.update); // Memperbarui data kategori berdasarkan ID
router.delete('/:id', verifyToken, kategoriController.destroy); // Menghapus kategori berdasarkan ID

// Mengekspor router untuk digunakan di modul lain
module.exports = router;
