const { Router } = require('express');
const router = Router();


router.post('/send-email', (req, res) => {
	const { name, email, phone, subject, message} = console.log(req.body);

	contentHTML = `
		<h1>User Information</h1>
		<ul>
			<li>name: ${ name }</li>
			<li>email: ${ email }</li>
			<li>phone: ${ phone }</li>
			<li>subject: ${ subject }</li>
		</ul>
		<p>message: ${ message }</p>
	`;
		console.log(contentHTML);

	res.send('received');
});

module.exports = router;
