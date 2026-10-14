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

const labelClass = 'mb-1.5 block text-sm font-medium text-[var(--text)]'

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
    <form onSubmit={handleSubmit(onSubmit)} className="card space-y-4 p-6 sm:p-8" noValidate>
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          aria-invalid={errors.name ? 'true' : 'false'}
          {...register('name', {
            required: 'Name is required',
            minLength: { value: 2, message: 'Name must be at least 2 characters' },
          })}
          className="nb-input"
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          aria-invalid={errors.email ? 'true' : 'false'}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email address',
            },
          })}
          className="nb-input"
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-subject" className={labelClass}>
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          aria-invalid={errors.subject ? 'true' : 'false'}
          {...register('subject', { required: 'Subject is required' })}
          className="nb-input"
          placeholder="What would you like to discuss?"
        />
        {errors.subject && <p className="mt-1.5 text-xs text-red-500">{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          aria-invalid={errors.message ? 'true' : 'false'}
          {...register('message', {
            required: 'Message is required',
            minLength: { value: 10, message: 'Message must be at least 10 characters' },
          })}
          className="nb-input resize-none"
          placeholder="Tell me about your idea or question..."
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center">
        <Send size={18} /> {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {status.type !== 'idle' && (
        <p
          role="status"
          className={`rounded-xl px-4 py-3 text-sm font-medium ${
            status.type === 'success'
              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
              : status.type === 'error'
                ? 'bg-red-500/10 text-red-600 dark:text-red-400'
                : 'bg-[var(--bg-soft)] text-[var(--muted)]'
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
