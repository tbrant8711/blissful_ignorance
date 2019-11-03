const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {

    console.log('in send welcome')
    sgMail.send({
        to: email,
        from: 'tbrant8711@gmail.com',
        subject: 'Welcome',
        text: `Welcome to the app, ${name}`

    })
}

const sendCancellationEmail = (email, name) => {
    console.log('send cancel email')
    sgMail.send({
        to: email,
        from: 'tbrant8711@gmail.com',
        subject: 'why you go?',
        text: `Sorry to see you go, ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}