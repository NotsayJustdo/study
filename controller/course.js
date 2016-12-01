const express = require('express');
const router = express.Router();

router.get('/course/create', (req, res) => {
	res.render('courses/course_add');
})

router.get('/course/list', (req, res) => {
	res.render('courses/course_list');
})

router.get('/course/category', (req, res) => {
	res.render('courses/course_category');
})

router.get('/course/topic', (req, res) => {
	res.render('courses/course_topic');
})

module.exports = router;