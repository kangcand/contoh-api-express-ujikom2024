'use strict';

const express = require('express');
const auth = require('../controllers/authController');
const { check, validationResult } = require('express-validator');
const router = express.Router();

// Middleware untuk validasi input registrasi
const checkValidationRegister = [
    check('username').not().isEmpty().withMessage('required value').isAlphanumeric(),
    check('fullname').isAlpha().isLength({ min: 5, max: 50 }),
    check('email').not().isEmpty().withMessage('required value').isEmail(),
    check('password').not().isEmpty().withMessage('required value').isAlphanumeric()
];

// Middleware untuk validasi input login
const checkValidationLogin = [
    check('username').not().isEmpty().withMessage('required value').isAlphanumeric(),
    check('password').not().isEmpty().withMessage('required value').isAlphanumeric()
];

// Middleware untuk validasi input email pada forgot password
const checkValidationForgotPassword = [
    check('email').trim().isEmail().withMessage('Alamat email tidak valid'),
];

router.post('/api/v1/auth/register', checkValidationRegister, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json(errors);
    }
    auth.register(req.body, res);
});

router.post('/api/v1/auth/login', checkValidationLogin, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json(errors);
    }
    auth.login(req, res);
});

router.post('/api/v1/auth/forgot-password', checkValidationForgotPassword, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json(errors);
    }
    auth.forgotPassword(req, res);
});

module.exports = router;
