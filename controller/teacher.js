const express = require('express');
const router = express.Router();
router.get('/teacher', (req, res) => {
	res.render('teachers/teacher_list');
});

router.get('/teacher/add', (req, res) => {
	res.render('teachers/teacher_add');
})
module.exports = router;
