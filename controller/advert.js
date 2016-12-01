const express = require('express');
var router = express.Router();

router.get('/advert', (req, res) => {
	res.render('adverts/advert_list');
})

router.get('/advert/add', (req, res) => {
	res.render('adverts/advert_add');
})

module.exports = router;