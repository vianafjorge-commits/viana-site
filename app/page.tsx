'use client'

import { useState } from 'react'
import { translations } from '../lib/i18n'
import { detectIntent, generateAIResponse, shouldEscalateToHuman } from '../lib/ai-engine'
import styles from './page.module.css'

type Locale = 'pt' | 'en'

interface ChatMessage {
  bot: boolean
  text: string
  suggestions?: string[]
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>('pt')
  const [chatOpen, setChatOpen] = useState(false)
  const t = translations[locale]

  const toggleLanguage = () => {
    setLocale(locale === 'pt' ? 'en' : 'pt')
  }

  const openWhatsApp = (message: string = '') => {
    const text = message || (locale === 'pt' 
      ? 'Olá! Gostaria de saber mais sobre os serviços da Viana Limpezas.'
      : 'Hello! I would like to know more about Viana Cleaning services.')
    const url = `https://wa.me/351912345678?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <h1 className={styles.logo}>✨ Viana</h1>
          <button onClick={toggleLanguage} className={styles.langButton}>
            {locale === 'pt' ? '🇬🇧 EN' : '🇵🇹 PT'}
          </button>
        </div>
      </nav>

      {/* Hero Section Premium */}
      <section className={styles.heroPremium}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>{t.hero.badge}</div>
          <h1 className={styles.heroTitle}>{t.hero.titulo}</h1>
          <p className={styles.heroSubtitle}>{t.hero.subtitulo}</p>
          <p className={styles.heroDescription}>{t.hero.descricao}</p>
          <div className={styles.heroCTA}>
            <button 
              className={styles.ctaPrimary}
              onClick={() => openWhatsApp()}
            >
              {t.hero.cta} →
            </button>
            <button 
              className={styles.ctaSecondary}
              onClick={() => openWhatsApp(`Gostaria de um orçamento para limpeza.`)}
            >
              📋 {locale === 'pt' ? 'Solicitar Orçamento' : 'Request Quote'}
            </button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className={styles.trustSection}>
        <div className={styles.trustGrid}>
          <div className={styles.trustCard}>
            <div className={styles.trustNumber}>10+</div>
            <div className={styles.trustLabel}>{t.trust.anos}</div>
          </div>
          <div className={styles.trustCard}>
            <div className={styles.trustNumber}>500+</div>
            <div className={styles.trustLabel}>{t.trust.clientes}</div>
          </div>
          <div className={styles.trustCard}>
            <div className={styles.trustNumber}>100%</div>
            <div className={styles.trustLabel}>{t.trust.satisfacao}</div>
          </div>
          <div className={styles.trustCard}>
            <div className={styles.trustNumber}>🌱</div>
            <div className={styles.trustLabel}>{t.trust.eco}</div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>{t.services.titulo}</h2>
        <div className={styles.servicesGrid}>
          {[
            { key: 'limpeza_residencial', icon: '🏠' },
            { key: 'limpeza_empresarial', icon: '🏢' },
          ].map((service) => {
            const svc = t.services[service.key as keyof typeof t.services]
            return (
              <div key={service.key} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{svc.titulo}</h3>
                <p>{svc.descricao}</p>
                <ul className={styles.serviceList}>
                  {svc.detalhes.map((detail: string, i: number) => (
                    <li key={i}>✓ {detail}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <h2 className={styles.sectionTitle}>{t.testimonials.titulo}</h2>
        <div className={styles.testimonialsGrid}>
          {t.testimonials.items.map((testimonial, i) => (
            <div key={i} className={styles.testimonialCard}>
              <div className={styles.stars}>{'⭐'.repeat(testimonial.rating)}</div>
              <p className={styles.testimonialText}>"{testimonial.text}"</p>
              <div className={styles.testimonialAuthor}>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallerySection}>
        <h2 className={styles.sectionTitle}>{t.gallery.titulo}</h2>
        <div className={styles.galleryGrid}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={styles.galleryItem}>
              <div className={styles.beforeAfter}>
                <div className={styles.before}>
                  <div className={styles.placeholderBefore}></div>
                  <span>{t.gallery.antes}</span>
                </div>
                <div className={styles.after}>
                  <div className={styles.placeholderAfter}></div>
                  <span>{t.gallery.depois}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricingSection}>
        <h2 className={styles.sectionTitle}>{t.pricing.titulo}</h2>
        <p className={styles.pricingDescription}>{t.pricing.descricao}</p>
        <div className={styles.pricingGrid}>
          {[
            { tier: 'basico', key: 'basico' as const },
            { tier: 'profissional', key: 'profissional' as const, popular: true },
            { tier: 'premium', key: 'premium' as const },
          ].map(({ tier, key, popular }) => {
            const plan = t.pricing[key]
            return (
              <div key={tier} className={`${styles.pricingCard} ${popular ? styles.popular : ''}`}>
                {popular && <div className={styles.popularBadge}>⭐ {locale === 'pt' ? 'Mais Popular' : 'Most Popular'}</div>}
                <h3>{plan.nome}</h3>
                <p className={styles.pricingSubtitle}>{plan.descricao}</p>
                <div className={styles.price}>{plan.preco}</div>
                <p className={styles.priceFreq}>{locale === 'pt' ? '/serviço' : '/service'}</p>
                <ul className={styles.priceFeatures}>
                  {plan.features.map((feature: string, i: number) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
                <button className={popular ? styles.ctaPrimary : styles.ctaOutline} onClick={() => openWhatsApp(`Interessado no plano ${plan.nome}`)}>
                  {locale === 'pt' ? 'Solicitar Agora' : 'Request Now'}
                </button>
              </div>
            )
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>{t.faq.titulo}</h2>
        <div className={styles.faqGrid}>
          {t.faq.items.map((item, i) => (
            <FAQItem key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className={styles.blogSection}>
        <h2 className={styles.sectionTitle}>{t.blog.titulo}</h2>
        <div className={styles.blogGrid}>
          {t.blog.items.map((post, i) => (
            <article key={i} className={styles.blogCard}>
              <div className={styles.blogDate}>{post.data}</div>
              <h3>{post.titulo}</h3>
              <div className={styles.blogCategory}>{post.categoria}</div>
              <p>{post.resumo}</p>
              <a href="#" className={styles.blogLink}>
                {locale === 'pt' ? 'Ler Mais' : 'Read More'} →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Calendar Section */}
      <section className={styles.calendarSection}>
        <h2 className={styles.sectionTitle}>{t.calendar.titulo}</h2>
        <div className={styles.calendarContainer}>
          <CalendarBooking locale={locale} t={t} />
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <h2 className={styles.sectionTitle}>{t.location.titulo}</h2>
        <div className={styles.mapContent}>
          <div className={styles.mapIframe}>
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              style={{ borderRadius: '15px' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.7395945877396!2d-8.833333!3d41.693611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41c5b5c5b5c5b5d%3A0x5c5c5c5c5c5c5c5c!2sViana%20do%20Castelo%2C%20Portugal!5e0!3m2!1spt-PT!2spt!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={styles.locationInfo}>
            <h3>{t.location.descricao}</h3>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>📍 {locale === 'pt' ? 'Endereço:' : 'Address:'}</span>
              <p>{t.location.endereco}</p>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>📞 {locale === 'pt' ? 'Telefone:' : 'Phone:'}</span>
              <p>{t.location.telefone}</p>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>📧 {locale === 'pt' ? 'Email:' : 'Email:'}</span>
              <p>{t.location.email}</p>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>🕐 {locale === 'pt' ? 'Horários:' : 'Hours:'}</span>
              <p>{t.location.horarios}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContent}>
          <h2>{t.newsletter.titulo}</h2>
          <p>{t.newsletter.descricao}</p>
          <NewsletterForm locale={locale} t={t} />
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>{locale === 'pt' ? 'Pronto para Transformar Seus Espaços?' : 'Ready to Transform Your Spaces?'}</h2>
        <p>{locale === 'pt' ? 'Entre em contato conosco hoje e receba um orçamento grátis' : 'Contact us today and get a free quote'}</p>
        <button className={styles.ctaPrimary} onClick={() => openWhatsApp()}>
          💬 {locale === 'pt' ? 'Abrir WhatsApp' : 'Open WhatsApp'}
        </button>
      </section>

      {/* Chat Bot Floating */}
      <ChatBot locale={locale} t={t} open={chatOpen} setOpen={setChatOpen} />

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Viana Limpezas</h4>
            <p>{t.footer.direitos}</p>
          </div>
          <div className={styles.footerSection}>
            <h4>{locale === 'pt' ? 'Contacto' : 'Contact'}</h4>
            <p>📧 {t.footer.email}</p>
            <p>📞 {t.footer.telefone}</p>
            <p>📍 {t.footer.endereco}</p>
          </div>
          <div className={styles.footerSection}>
            <h4>{locale === 'pt' ? 'Horários' : 'Hours'}</h4>
            <p>{t.footer.horarios}</p>
            <button 
              onClick={() => openWhatsApp()}
              className={styles.whatsappButton}
            >
              💬 {t.footer.whatsapp}
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.faqItem}>
      <button 
        className={styles.faqQuestion}
        onClick={() => setOpen(!open)}
      >
        <span>{question}</span>
        <span className={styles.faqToggle}>{open ? '−' : '+'}</span>
      </button>
      {open && <p className={styles.faqAnswer}>{answer}</p>}
    </div>
  )
}

function CalendarBooking({ locale, t }: { locale: 'pt' | 'en', t: any }) {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      const message = locale === 'pt'
        ? `Gostaria de agendar para ${selectedDate} às ${selectedTime}`
        : `I would like to book for ${selectedDate} at ${selectedTime}`
      window.open(`https://wa.me/351912345678?text=${encodeURIComponent(message)}`, '_blank')
    }
  }

  const getNextDays = () => {
    const days = []
    for (let i = 1; i <= 14; i++) {
      const date = new Date()
      date.setDate(date.getDate() + i)
      if (date.getDay() !== 0) { // Exclude Sundays
        days.push(date.toISOString().split('T')[0])
      }
    }
    return days
  }

  return (
    <div className={styles.bookingForm}>
      <div className={styles.bookingField}>
        <label>{t.calendar.selectDate}:</label>
        <select 
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className={styles.bookingSelect}
        >
          <option value="">{locale === 'pt' ? 'Escolha uma data' : 'Choose a date'}</option>
          {getNextDays().map(date => (
            <option key={date} value={date}>
              {new Date(date).toLocaleDateString(locale === 'pt' ? 'pt-PT' : 'en-GB')}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.bookingField}>
        <label>{t.calendar.selectTime}:</label>
        <select 
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className={styles.bookingSelect}
        >
          <option value="">{locale === 'pt' ? 'Escolha um horário' : 'Choose a time'}</option>
          {t.calendar.availableTimes.map((time: string) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>

      <button 
        onClick={handleBooking}
        disabled={!selectedDate || !selectedTime}
        className={styles.bookingBtn}
      >
        💬 {t.calendar.confirm}
      </button>
    </div>
  )
}

function NewsletterForm({ locale, t }: { locale: 'pt' | 'en', t: any }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
    } else {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.newsletterForm}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t.newsletter.placeholder}
        className={styles.newsletterInput}
        required
      />
      <button type="submit" className={styles.newsletterBtn}>
        {t.newsletter.button}
      </button>
      {status === 'success' && <p className={styles.successMsg}>✓ {t.newsletter.success}</p>}
      {status === 'error' && <p className={styles.errorMsg}>✗ {t.newsletter.error}</p>}
    </form>
  )
}

function ChatBot({ locale, t, open, setOpen }: { locale: 'pt' | 'en', t: any, open: boolean, setOpen: (v: boolean) => void }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { bot: true, text: t.chat.messages[0].text, suggestions: locale === 'pt' ? ['Ver Preços', 'Agendar', 'Sobre Nós'] : ['View Prices', 'Book Now', 'About Us'] }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = () => {
    if (input.trim()) {
      setIsLoading(true)
      
      // Add user message
      setMessages(prev => [...prev, { bot: false, text: input }])
      
      // Detect intent using AI engine
      const intent = detectIntent(input, locale)
      
      // Check if needs human escalation
      if (shouldEscalateToHuman(input, locale)) {
        setTimeout(() => {
          const escalationMsg = locale === 'pt' 
            ? '😟 Desculpa ouvir isso! Vou conectar com nosso gerente para ajudar melhor. Um momento...'
            : '😟 Sorry to hear that! I\'ll connect you with our manager to help better. One moment...'
          
          setMessages(prev => [...prev, { 
            bot: true, 
            text: escalationMsg,
            suggestions: locale === 'pt' ? ['Telefonar', 'Email'] : ['Call', 'Email']
          }])
          setIsLoading(false)
        }, 800)
      } else {
        // Generate AI response
        setTimeout(() => {
          const aiResponse = generateAIResponse(intent, locale)
          setMessages(prev => [...prev, { 
            bot: true, 
            text: aiResponse.text,
            suggestions: aiResponse.suggestions
          }])
          setIsLoading(false)
        }, 600)
      }
      
      setInput('')
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
    setTimeout(() => {
      handleSend()
    }, 100)
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={styles.chatButton}
        title={t.chat.titulo}
      >
        💬
      </button>

      {open && (
        <div className={styles.chatBox}>
          <div className={styles.chatHeader}>
            <h3>{t.chat.titulo}</h3>
            <button onClick={() => setOpen(false)} className={styles.chatClose}>×</button>
          </div>
          <div className={styles.chatMessages}>
            {messages.map((msg, i) => (
              <div key={i}>
                <div className={`${styles.chatMessage} ${msg.bot ? styles.bot : styles.user}`}>
                  {msg.text}
                </div>
                {msg.suggestions && msg.bot && (
                  <div className={styles.chatSuggestions}>
                    {msg.suggestions.map((sugg, j) => (
                      <button
                        key={j}
                        className={styles.suggestionBtn}
                        onClick={() => handleSuggestionClick(sugg)}
                      >
                        {sugg}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className={`${styles.chatMessage} ${styles.bot}`}>
                <div className={styles.typingIndicator}>
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
          </div>
          <div className={styles.chatInput}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
              placeholder={t.chat.placeholder}
              className={styles.chatInputField}
              disabled={isLoading}
            />
            <button 
              onClick={handleSend} 
              className={styles.chatSendBtn}
              disabled={isLoading}
            >
              {t.chat.send}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
