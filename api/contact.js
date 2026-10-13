export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }
  try {
    const { name, email, subject, message } = req.body || {}
    if (!name || !email || !subject || !message) {
      res.status(400).json({ error: 'All fields are required.' })
      return
    }
    if (!/^\S+@\S+$/.test(email)) {
      res.status(400).json({ error: 'Invalid email.' })
      return
    }

    // Optional email sending via SMTP (configure env vars on Vercel).
    if (process.env.SMTP_HOST) {
      const nodemailer = await import('nodemailer')
      const transporter = nodemailer.default.createTransport({
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
      console.log('CONTACT SUBMISSION:', { name, email, subject, message })
    }

    res.status(200).json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to send message.' })
  }
}