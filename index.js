const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const cloudinary = require('cloudinary').v2;
mongoose.connect(process.env.MONGODB_URI);

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_COULD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	secure: true,
});

const app = express();
app.use(express.json());
app.use(cors);

const signupRoutes = require('./routes/signUp');
app.use(signupRoutes);

const loginRoutes = require('./routes/login');
app.use(loginRoutes);

const offerRoutes = require('./routes/offer');
app.use(offerRoutes);

app.all('*', (req, res) => {
	res.status(404).json({
		message: 'This route does not exixst',
	});
});
const port = process.env.PORT;

app.listen(port, () => {
	console.log(`Serveur started on port ${port}`);
});
