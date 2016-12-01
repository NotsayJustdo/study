const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
	res.render('users/user_list');
})

router.get('/user/profile', (req, res) => {
	res.render('users/user_profile');
})

module.exports = router;