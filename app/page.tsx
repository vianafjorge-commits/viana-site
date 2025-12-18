'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './page.module.css'
import { translations } from '../lib/i18n'
import type { Locale } from '../lib/i18n'

export default function Home() {
  const [locale, setLocale] = useState<Locale>('pt')
  const t = translations[locale]

  const toggleLanguage = () => {
    setLocale(locale === 'pt' ? 'en' : 'pt')
  }

  return (
    <main>
      {/* Navigation */}
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

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/351912345678?text=Olá%20Viana%20-%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços"
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
        title={t.footer.whatsapp}
      >
        💬
      </a>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>{t.hero.titulo}</h1>
            <p className={styles.heroSubtitle}>{t.hero.subtitulo}</p>
            <p className={styles.heroDesc}>{t.hero.descricao}</p>
            <Link href="/contato" className={styles.cta}>
              {t.hero.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>{t.services.titulo}</h2>
            <p>Soluções de limpeza personalizadas para suas necessidades</p>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🏠</div>
              <h3>{t.services.limpeza_residencial.titulo}</h3>
              <p>{t.services.limpeza_residencial.descricao}</p>
              {t.services.limpeza_residencial.detalhes && (
                <ul>
                  {t.services.limpeza_residencial.detalhes.map((detalhe, idx) => (
                    <li key={idx}>{detalhe}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🏢</div>
              <h3>{t.services.limpeza_empresarial.titulo}</h3>
              <p>{t.services.limpeza_empresarial.descricao}</p>
              {t.services.limpeza_empresarial.detalhes && (
                <ul>
                  {t.services.limpeza_empresarial.detalhes.map((detalhe, idx) => (
                    <li key={idx}>{detalhe}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>10+</div>
            <div className={styles.statLabel}>Anos de Experiência</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>1000+</div>
            <div className={styles.statLabel}>Clientes Satisfeitos</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Satisfação Garantida</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>Eco</div>
            <div className={styles.statLabel}>Produtos Sustentáveis</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h4>Viana Limpezas</h4>
              <p>Serviços profissionais de limpeza em Viana do Castelo</p>
            </div>
            <div className={styles.footerSection}>
              <h4>Contacto</h4>
              <p>📧 {t.footer.email}</p>
              <p>📞 {t.footer.telefone}</p>
              <p>📍 {t.footer.endereco}</p>
            </div>
            <div className={styles.footerSection}>
              <h4>Links Rápidos</h4>
              <ul>
                <li><Link href="/">{t.nav.inicio}</Link></li>
                <li><Link href="/sobre">{t.nav.sobre}</Link></li>
                <li><Link href="/servicos">{t.nav.servicos}</Link></li>
                <li><Link href="/contato">{t.nav.contato}</Link></li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2025 Viana Limpezas. {t.footer.direitos}</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
