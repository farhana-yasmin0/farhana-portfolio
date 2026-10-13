import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'
import nodemailer from 'nodemailer'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({ origin: process.env.CLIENT_URL || '*' }))
app.use(express.json({ limit: '10kb' }))

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 10 })
app.use('/api/', limiter)

app.get('/api/health', (_req, res) => res.json({ ok: true }))

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {}
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required.' })
    }
    if (!/^\S+@\S+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email.' })
    }

    // If SMTP configured, send email; otherwise just log.
    if (process.env.SMTP_HOST) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === 'true',
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      })
      await transporter.sendMail({
        from: `"${name}" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
        to: process.env.CONTACT_TO || 'farhana@example.com',
        replyTo: email,
        subject: `[Portfolio] ${subject}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      })
    } else {
      console.log('CONTACT FORM SUBMISSION:', { name, email, subject, message })
    }

    res.json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to send message.' })
  }
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))