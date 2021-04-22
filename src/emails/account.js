const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'deltel000@gmail.com',
        subject: 'Welcome',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelFeedbackEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'deltel000@gmail.com',
        subject: 'Goodbye',
        text: `Sorry to see you go ${name}. Would you mind sending some feedback on why you have chosen to leave us?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelFeedbackEmail
}