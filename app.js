const express = require('express');
const index = require('./controller/index');
const user = require('./controller/user');
const teacher = require('./controller/teacher'); 
const course = require('./controller/course');
const advert = require('./controller/advert');
const login = require('./controller/login');
const app = express();

app.use('/', express.static('public'));
app.use('/', express.static('uploads'));
app.set('views', __dirname+'/views');
app.set('view engine', 'xtpl')
app.use('/', index);
app.use('/', user); 
app.use('/', teacher);
app.use('/', course);
app.use('/', advert);
app.use('/', login);
     
app.listen(3000, () => {
	console.log('running at port 3000');
})