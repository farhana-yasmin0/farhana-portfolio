import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send } from 'lucide-react'

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

type Status = { type: 'idle' | 'success' | 'error' | 'info'; message: string }
type FormStatus = Status

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' })

  const onSubmit = async (data: FormData) => {
    setStatus({ type: 'idle', message: '' })
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })

        if (response.ok) {
          setStatus({ type: 'success', message: 'Message sent successfully. Thank you!' })
          reset()
          return
        }

        setStatus({
          type: 'error',
          message: 'The message could not be sent. Please try again or use the email link.',
        })
      } catch {
        setStatus({
          type: 'error',
          message: 'Network error while sending. Please use the email link below.',
        })
      }
      return
    }

    const mailto = `mailto:farhanayasmin113@gmail.com?subject=${encodeURIComponent(
      data.subject,
    )}&body=${encodeURIComponent(`${data.message}\n\n-- ${data.name} (${data.email})`)}`
    window.location.assign(mailto)
    setStatus({
      type: 'info',
      message:
        'No form provider is configured. Your email app has been opened so you can send the message directly.',
    })
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card space-y-4 p-6" noValidate>
      <div>
        <label htmlFor="contact-name" className="mb-1 block text-sm font-medium">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          {...register('name', {
            required: 'Name is required',
            minLength: { value: 2, message: 'Name must be at least 2 characters' },
          })}
          className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-3 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email address',
            },
          })}
          className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-3 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-1 block text-sm font-medium">
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          {...register('subject', { required: 'Subject is required' })}
          className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-3 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          placeholder="What would you like to discuss?"
        />
        {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          {...register('message', {
            required: 'Message is required',
            minLength: { value: 10, message: 'Message must be at least 10 characters' },
          })}
          className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-3 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          placeholder="Tell me about your idea or question..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center disabled:opacity-60">
        <Send size={18} /> {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {status.type !== 'idle' && (
        <p
          role="status"
          className={`text-sm ${
            status.type === 'success'
              ? 'text-emerald-400'
              : status.type === 'error'
                ? 'text-red-400'
                : 'text-[var(--muted)]'
          }`}
        >
          {status.message}
        </p>
      )}

      {!import.meta.env.VITE_FORMSPREE_ENDPOINT && (
        <p className="text-xs text-[var(--muted)]">
          Form delivery is not configured yet. Submitting will open your email app as a safe fallback.
        </p>
      )}
    </form>
  )
}