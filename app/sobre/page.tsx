'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from '../page.module.css'
import { translations } from '../../lib/i18n'
import type { Locale } from '../../lib/i18n'

export default function Sobre() {
  const [locale, setLocale] = useState<Locale>('pt')
  const t = translations[locale]

  const toggleLanguage = () => {
    setLocale(locale === 'pt' ? 'en' : 'pt')
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
          <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#667eea' }}>{t.sobre.titulo}</h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '1.5rem' }}>
            {t.sobre.descricao1}
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '2rem' }}>
            {t.sobre.descricao2}
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            <div style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', padding: '2rem', borderRadius: '10px' }}>
              <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>🎯 Missão</h3>
              <p style={{ color: '#555', lineHeight: '1.6' }}>{t.sobre.missao}</p>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', padding: '2rem', borderRadius: '10px' }}>
              <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>👁️ Visão</h3>
              <p style={{ color: '#555', lineHeight: '1.6' }}>{t.sobre.visao}</p>
            </div>
          </div>
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
