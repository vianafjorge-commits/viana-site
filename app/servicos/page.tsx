'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from '../page.module.css'
import { translations } from '../../lib/i18n'
import type { Locale } from '../../lib/i18n'

export default function Servicos() {
  const [locale, setLocale] = useState<Locale>('pt')
  const t = translations[locale]

  const toggleLanguage = () => {
    setLocale(locale === 'pt' ? 'en' : 'pt')
  }

  const servicos = [
    {
      titulo: t.services.limpeza_residencial.titulo,
      descricao: t.services.limpeza_residencial.descricao,
      icon: '🏠',
      detalhes: t.services.limpeza_residencial.detalhes
    },
    {
      titulo: t.services.limpeza_empresarial.titulo,
      descricao: t.services.limpeza_empresarial.descricao,
      icon: '🏢',
      detalhes: t.services.limpeza_empresarial.detalhes
    }
  ]

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
          <div className={styles.sectionHeader}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#667eea', textAlign: 'center' }}>{t.services.titulo}</h1>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', fontStyle: 'italic' }}>Soluções de limpeza profissional para cada necessidade</p>
          </div>
          <div className={styles.servicesGrid}>
            {servicos.map((servico, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardIcon}>{servico.icon}</div>
                <h3>{servico.titulo}</h3>
                <p>{servico.descricao}</p>
                {servico.detalhes && (
                  <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', color: '#555' }}>
                    {servico.detalhes.map((detalhe, idx) => (
                      <li key={idx} style={{ marginBottom: '0.5rem', lineHeight: '1.5' }}>
                        {detalhe}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
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
