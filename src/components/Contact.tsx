import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import SectionTitle from './SectionTitle'

type FormData = { name: string; email: string; subject: string; message: string }

const API = import.meta.env.VITE_API_URL ?? (import.meta.env.DEV ? 'http://localhost:5000' : '')

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post(`${API}/api/contact`, data, { timeout: 10000 })
      toast.success('Message sent! I’ll get back to you soon.')
      reset()
    } catch (_err) {
      // Fallback: open mail client
      const mailto = `mailto:farhana@example.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(data.message + '\n\n— ' + data.name + ' (' + data.email + ')')}`
      window.location.href = mailto
      toast('Opened your email client as a fallback.', { icon: '✉️' })
      reset()
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle eyebrow="Get In Touch" title="Contact Me" subtitle="Have a project in mind? Let's talk." />
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-[--muted] leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out using the form or any of the channels below.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4"><FiMail className="text-[--accent]" /><span>farhana@example.com</span></div>
              <div className="flex items-center gap-4"><FiPhone className="text-[--accent]" /><span>+880 1XXXXXXXXX</span></div>
              <div className="flex items-center gap-4"><FiMapPin className="text-[--accent]" /><span>Rajbari, Bangladesh</span></div>
            </div>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card rounded-3xl p-6 space-y-4"
          >
            <div>
              <input {...register('name', { required: 'Name is required' })} placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-[--bg-soft] border border-white/5 focus:outline-none focus:ring-2 focus:ring-[--accent]" />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <input {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })} placeholder="Your Email" className="w-full px-4 py-3 rounded-xl bg-[--bg-soft] border border-white/5 focus:outline-none focus:ring-2 focus:ring-[--accent]" />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <input {...register('subject', { required: 'Subject is required' })} placeholder="Subject" className="w-full px-4 py-3 rounded-xl bg-[--bg-soft] border border-white/5 focus:outline-none focus:ring-2 focus:ring-[--accent]" />
              {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
            </div>
            <div>
              <textarea {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Too short' } })} placeholder="Your Message" rows={5} className="w-full px-4 py-3 rounded-xl bg-[--bg-soft] border border-white/5 focus:outline-none focus:ring-2 focus:ring-[--accent] resize-none" />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full py-3 rounded-xl bg-gradient-to-r from-[--accent] to-[--accent-2] text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60">
              <FiSend /> {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}