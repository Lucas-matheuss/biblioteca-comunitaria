import nodemailer from 'nodemailer'
import { tr } from 'zod/locales'
import 'dotenv/config'

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
})

function sendEmail(email, bookTitle, dueDate) {
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Reminder: Book Due Date Approaching',
        html:`
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #f60;">Community Library Reminder</h2>
            <p>Dear Library Member,</p>
            <p>This is a friendly reminder that the book you borrowed, <strong>"${bookTitle}"</strong>, is due on <strong>${dueDate}</strong>.</p>
            <p>Please ensure to return or renew the book by the due date to avoid any late fees.</p>
        </div>
        `,
    }

    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error)
    } else {
        console.log('Email sent:', info.response)
    }
})

}


//com export default conseguimos importar a função com qualquer nome
export default sendEmail