const express = require('express');
const nodemailer = require('nodemailer');
const { google } =require('googleapis');
const router = express.Router();

router.post( '/send-mail', (req, res) => {
    const { introduce_name, introduce_email, introduce_phone, introduce_subject, introduce_message } = req.body;
    contentHTML = `
        <h1>User Informatio</h1>
        <p>Name: </p>
        <p>${introduce_name}</p>
        <p>Email: </p>
        <p>${introduce_email}</p>
        <p>Phone: </p>
        <p>${introduce_phone}</p>
        <p>Message: </p>
        <p>${introduce_message}</p>
    `;
    const CLIENT_ID = "201570602489-2la9jamuoqqbaecjpo2n7l647ca0ro9d.apps.googleusercontent.com";
    const CLIENT_SECRETE = "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";
    const REDIRECT_URI = "https://developers.google.com/oauthplayground";
    const REFRESH_TOKEN = "1//04vNakehc2nECCgYIARAAGAQSNwF-L9IrWQwSGKRIZ1b4rON0iAf_55X23nxhscNXK-QuhDQ-DLTYPcESYvkF13FDfrjrzut0dNI";

    const oAuth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRETE, 
        REDIRECT_URI
    );

    oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

    async function sendMail() {
        try {
            const accessToken = await oAuth2Client.getAccessToken();
            const transporte = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: "OAuth2", 
                    user: "ivllamoficial@gmail.com",
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRETE,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken
                },
            });
            const mailOptions = {
                from: "Ivann Llamas Portfolio <ivllamoficial@gmail.com>",
                to: "ivllamoficial@gmail.com",
                subject: `${introduce_subject}`,
                html: contentHTML,
            };

            const result = await transporte.sendMail(mailOptions);
            return result;
        }
        catch(err) {
            console.log(err);
        }
    }
    sendMail().then(result=> res.status(200).send('Enviado')).catch((error) => console.log(error.message));
});

module.exports = router;