'use client'

import Image from 'next/image'
import { useState } from 'react'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI Solutions Setup',
    items: ['AI tool integration and workflow automation', 'Custom AI-powered features for existing products', 'Practical AI adoption strategy for businesses'],
    demo: { label: 'Try RAG Chatbot Demo', href: '/RAG-Chatbot/' },
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Software Development',
    items: ['Custom software solutions', 'Automation tools', 'Technical problem-solving'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'GIS & Location-Based Solutions',
    items: ['Interactive maps and spatial data visualisation', 'Location-aware web and mobile apps', 'GIS data processing and analysis'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Web & App Development',
    items: ['AI-powered web apps', 'Chatbot widgets', 'Internal business tools'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'STEM Curriculum Design',
    items: ['Coding workshops', 'STEM learning materials', 'Project-based educational content'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Technical Consulting',
    items: ['Early-stage project planning', 'Solution design', 'Development support'],
  },
]

const steps = [
  { number: '01', title: 'Discuss Project Goals', desc: 'We start by understanding what you want to achieve and the problems you need solved.' },
  { number: '02', title: 'Define Scope & Deliverables', desc: 'Together we agree on exactly what will be built, timelines, and how success looks.' },
  { number: '03', title: 'Build & Refine', desc: 'We develop the solution iteratively, keeping you informed and involved throughout.' },
  { number: '04', title: 'Deliver a Practical Outcome', desc: 'You receive a working, documented solution that meets your original goals.' },
]

const reasons = [
  'Project-based and flexible — no retainers required',
  'Strong focus on practical, working outcomes',
  'Combines technical development with educational expertise',
  'Suitable for both business and learning-focused projects',
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formState, setFormState] = useState({ status: 'idle', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormState({ status: 'loading', message: '' })

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    const data = await res.json()

    if (res.ok) {
      setFormState({ status: 'success', message: 'Your message has been sent! We\'ll be in touch soon.' })
      setFormData({ name: '', email: '', message: '' })
    } else {
      setFormState({ status: 'error', message: data.error || 'Something went wrong. Please try again.' })
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ── Navigation ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-brand-100 shadow-sm h-24 overflow-visible">
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo: icon + name image */}
          <a href="#" className="flex items-center gap-2">
            <Image src="/ttl-icon-blub.png" alt="TechTinker Lab icon" width={100} height={100} className="object-contain" />
            <Image src="/ttl-name.png" alt="TechTinker Lab" width={200} height={46} className="object-contain" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            <a href="#about"    className="hover:text-brand-600 transition-colors">About</a>
            <a href="#services" className="hover:text-brand-600 transition-colors">Services</a>
            <a href="#process"  className="hover:text-brand-600 transition-colors">Process</a>
            <a
              href="#contact"
              className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-lg transition-colors shadow-sm"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-brand-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden border-t border-brand-100 px-6 py-4 flex flex-col gap-4 text-sm font-semibold text-gray-600 bg-white">
            <a href="#about"    onClick={() => setMenuOpen(false)} className="hover:text-brand-600">About</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-brand-600">Services</a>
            <a href="#process"  onClick={() => setMenuOpen(false)} className="hover:text-brand-600">Process</a>
            <a href="#contact"  onClick={() => setMenuOpen(false)} className="text-brand-600">Get in Touch</a>
          </nav>
        )}
      </header>

      <main>

        {/* ── Hero ── */}
        <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-brand-50 via-white to-accent-300/10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Large logo in hero */}
            <div className="flex justify-center mb-8">
              <div className="overflow-hidden h-[120px] w-[360px] relative">
              <Image src="/ttl-icon.png" alt="TechTinker Lab" width={360} height={360} className="absolute top-[-120px] object-contain drop-shadow-md" />
            </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
              Build Practical{' '}
              <span className="text-brand-600">Tech Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10">
              Software development, web solutions, AI integration, GIS applications, and STEM curriculum design — for project-based client work across the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-md"
              >
                Get in Touch
              </a>
              <a
                href="#services"
                className="border-2 border-brand-500 text-brand-700 hover:bg-brand-50 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                View Services
              </a>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">About TechTinker Lab</h2>
            <div className="w-16 h-1 bg-accent-500 rounded mx-auto mb-6" />
            <p className="text-gray-500 text-lg leading-relaxed">
              TechTinker Lab is a UK-based business specialising in software development, digital solutions, and STEM education projects.
              The company supports clients through project-based engagements in software engineering, websites, apps, AI integration, GIS systems, and curriculum development.
              Whether you are a small business needing a digital solution or an education provider building STEM content, TechTinker Lab delivers practical outcomes without the overhead of a large agency.
            </p>
          </div>
        </section>

        {/* ── Services ── */}
        <section id="services" className="py-20 px-6 bg-brand-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Services</h2>
              <div className="w-16 h-1 bg-accent-500 rounded mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Practical solutions across AI, software, web, GIS, education, and consulting.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-300 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-brand-50 group-hover:bg-brand-100 flex items-center justify-center text-brand-600 mb-4 transition-colors">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="mt-1 text-accent-500 flex-shrink-0">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {s.demo && (
                    <a
                      href={s.demo.href}
                      className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-brand-600 hover:text-brand-800 transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {s.demo.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section id="process" className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">How We Work</h2>
              <div className="w-16 h-1 bg-accent-500 rounded mx-auto mb-4" />
              <p className="text-gray-500 text-lg">A straightforward process focused on delivering real outcomes.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="relative">
                  <div className="text-5xl font-extrabold text-brand-100 mb-3 leading-none select-none">{step.number}</div>
                  <h3 className="text-base font-bold text-brand-700 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="py-20 px-6 bg-brand-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Why Choose TechTinker Lab</h2>
            <div className="w-16 h-1 bg-accent-500 rounded mx-auto mb-10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3 bg-brand-600/50 rounded-xl px-5 py-4 border border-brand-500/30">
                  <span className="text-accent-400 flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-white text-sm leading-relaxed">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-20 px-6 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Start a Conversation</h2>
            <div className="w-16 h-1 bg-accent-500 rounded mx-auto mb-6" />
            <p className="text-gray-500 text-lg mb-10">
              Interested in working together? TechTinker Lab welcomes enquiries for software development, digital projects, AI solutions, and STEM curriculum design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="mailto:hello@techtinker-lab.com"
                className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="bg-brand-50 rounded-2xl p-8 text-left space-y-5 border border-brand-100">
              <h3 className="text-lg font-bold text-gray-900">Send a Message</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-brand-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-brand-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-brand-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 bg-white resize-none"
                />
              </div>
              {formState.status === 'success' && (
                <div className="rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
                  {formState.message}
                </div>
              )}
              {formState.status === 'error' && (
                <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                  {formState.message}
                </div>
              )}
              <button
                type="submit"
                disabled={formState.status === 'loading'}
                className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm"
              >
                {formState.status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-3">
            <Image src="/ttl-icon.png" alt="TechTinker Lab" width={32} height={32} className="object-contain opacity-90" />
            <Image src="/ttl-name.png" alt="TechTinker Lab" width={120} height={28} className="object-contain brightness-0 invert opacity-80" />
          </div>
          <nav className="flex gap-6">
            <a href="#about"    className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#process"  className="hover:text-white transition-colors">Process</a>
            <a href="#contact"  className="hover:text-white transition-colors">Contact</a>
          </nav>
          <span>© {new Date().getFullYear()} TechTinker Lab. All rights reserved.</span>
        </div>
      </footer>

    </div>
  )
}
