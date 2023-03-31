const express = require("express");
const router = require('express').Router();
const {gettodo,posttodo,patchtodo,puttodo}=require('../controllers/todocontrollers');
router.route('/').get(gettodo).post(posttodo);
router.route('/:id').patch(patchtodo).put(puttodo);
module.exports = router;