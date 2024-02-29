// Mengimpor modul express dan membuat router
const express = require('express');
const router = express.Router();

// Mengimpor controller produk
const produkController = require('../controllers/produkController');

// Mengimpor middleware untuk verifikasi token
const { verifyToken } = require('../middleware/verify');

// Definisi rute-rute CRUD untuk produk dengan memerlukan token verifikasi
router.get('/', verifyToken, produkController.index); // Mendapatkan daftar produk
router.get('/:id', verifyToken, produkController.show); // Mendapatkan detail produk berdasarkan ID
router.post('/', verifyToken, produkController.store); // Menyimpan produk baru
router.put('/:id', verifyToken, produkController.update); // Memperbarui data produk berdasarkan ID
router.delete('/:id', verifyToken, produkController.destroy); // Menghapus produk berdasarkan ID

// Mengekspor router untuk digunakan di modul lain
module.exports = router;
