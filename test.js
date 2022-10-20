const uid2 = require('uid2');
const sha256 = require('crypto-js/sha256');
const base64 = require('crypto-js/enc-base64');

const password = 'test2';

const salt = uid2(16);

const hash = sha256(password + salt).toString(base64);

const password2 = 'test';
const verifHash = sha256(password2 + salt).toString(base64);
if (verifHash === hash) {
	console.log('gagné');
} else {
	console.log('perdu');
}
