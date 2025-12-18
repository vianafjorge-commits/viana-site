'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from '../page.module.css'
import { translations } from '../../lib/i18n'
import type { Locale } from '../../lib/i18n'

export default function Contato() {
  const [locale, setLocale] = useState<Locale>('pt')
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  })
  const [enviado, setEnviado] = useState(false)

  const t = translations[locale]

  const toggleLanguage = () => {
    setLocale(locale === 'pt' ? 'en' : 'pt')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnviado(true)
    setFormData({ nome: '', email: '', telefone: '', mensagem: '' })
    setTimeout(() => setEnviado(false), 3000)
  }

  const handleWhatsApp = () => {
    const mensagem = `${locale === 'pt' ? 'Olá, meu nome é' : 'Hi, my name is'} ${formData.nome}. ${formData.mensagem}`
    const whatsappUrl = `https://wa.me/351912345678?text=${encodeURIComponent(mensagem)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <main>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            Viana
          </Link>
          <div className={styles.navCenter}>
            <ul className={styles.navLinks}>
              <li><Link href="/">{t.nav.inicio}</Link></li>
              <li><Link href="/sobre">{t.nav.sobre}</Link></li>
              <li><Link href="/servicos">{t.nav.servicos}</Link></li>
              <li><Link href="/contato">{t.nav.contato}</Link></li>
            </ul>
          </div>
          <button className={styles.langToggle} onClick={toggleLanguage}>
            {locale === 'pt' ? '🇬🇧 EN' : '🇵🇹 PT'}
          </button>
        </div>
      </nav>

      <a 
        href="https://wa.me/351912345678?text=Olá%20Viana%20-%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços"
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>

      <section style={{ padding: '4rem 0', backgroundColor: 'white' }}>
        <div className={styles.container}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: '#667eea', textAlign: 'center' }}>{t.contato.titulo}</h1>
          
          <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="nome" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                {t.contato.nome}
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                {t.contato.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="telefone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                {t.contato.telefone}
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="mensagem" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                {t.contato.mensagem}
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows={5}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <button
                type="submit"
                style={{
                  padding: '0.75rem',
                  backgroundColor: '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#764ba2'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#667eea'}
              >
                {t.contato.enviar}
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                disabled={!formData.nome || !formData.mensagem}
                style={{
                  padding: '0.75rem',
                  backgroundColor: formData.nome && formData.mensagem ? '#25D366' : '#ccc',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: formData.nome && formData.mensagem ? 'pointer' : 'not-allowed',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => {
                  if (formData.nome && formData.mensagem) {
                    e.currentTarget.style.backgroundColor = '#1fba52'
                  }
                }}
                onMouseOut={(e) => {
                  if (formData.nome && formData.mensagem) {
                    e.currentTarget.style.backgroundColor = '#25D366'
                  }
                }}
              >
                {t.contato.whatsapp}
              </button>
            </div>

            {enviado && (
              <div style={{
                marginTop: '1rem',
                padding: '1rem',
                backgroundColor: '#d4edda',
                color: '#155724',
                borderRadius: '5px',
                textAlign: 'center'
              }}>
                {t.contato.enviado}
              </div>
            )}
          </form>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>&copy; 2025 Viana. {t.footer.direitos}</p>
        </div>
      </footer>
    </main>
  )
}
