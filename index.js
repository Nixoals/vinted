const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vinted');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
	cloud_name: 'dbrbme99g',
	api_key: '172949994133764',
	api_secret: 'VKTmGUJqTLYNNnbXMfxR8WTLmDU',
	secure: true,
});

const app = express();
app.use(express.json());

const signup = require('./routes/signUp');
app.use(signup);

const login = require('./routes/login');
app.use(login);

const offer = require('./routes/offer');
app.use(offer);

app.all('*', (req, res) => {
	res.status(404).json({
		message: 'This route does not exixst',
	});
});
const port = 3000;

app.listen(port, () => {
	console.log(`Serveur started on port ${port}`);
});
