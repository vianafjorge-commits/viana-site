'use client'

import { useState } from 'react'
import { translations } from '../lib/i18n'
import styles from './page.module.css'

type Locale = 'pt' | 'en'

export default function Home() {
  const [locale, setLocale] = useState<Locale>('pt')
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

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>{locale === 'pt' ? 'Pronto para Transformar Seus Espaços?' : 'Ready to Transform Your Spaces?'}</h2>
        <p>{locale === 'pt' ? 'Entre em contato conosco hoje e receba um orçamento grátis' : 'Contact us today and get a free quote'}</p>
        <button className={styles.ctaPrimary} onClick={() => openWhatsApp()}>
          💬 {locale === 'pt' ? 'Abrir WhatsApp' : 'Open WhatsApp'}
        </button>
      </section>

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
  )
}
