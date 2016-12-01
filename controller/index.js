const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
	res.render('dashboard/index')
});
router.get('/settings', (req, res) => {
	res.render('dashboard/settings')
})

module.exports=router;