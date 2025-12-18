export const i18n = {
  defaultLocale: 'pt',
  locales: ['pt', 'en'],
} as const

export type Locale = typeof i18n.locales[number]

export const translations = {
  pt: {
    nav: {
      inicio: 'Início',
      sobre: 'Sobre',
      servicos: 'Serviços',
      contato: 'Contato',
    },
    hero: {
      titulo: 'Bem-vindo à Viana',
      subtitulo: 'Serviços de Limpeza Profissional em Viana do Castelo',
      descricao: 'Excelência em limpeza e higiene para sua casa e empresa',
      cta: 'Solicitar Orçamento',
    },
    services: {
      titulo: 'Nossos Serviços',
      limpeza_residencial: {
        titulo: 'Limpeza Residencial',
        descricao: 'Serviços completos de limpeza para casas, apartamentos e condomínios com produtos ecológicos de qualidade',
        detalhes: [
          'Limpeza profunda e regular',
          'Limpeza de janelas e vidros',
          'Limpeza de carpetes e estofos',
          'Desinfecção e higienização',
          'Organização de espaços'
        ]
      },
      limpeza_empresarial: {
        titulo: 'Limpeza Empresarial',
        descricao: 'Soluções especializadas para empresas, escritórios, lojas e espaços comerciais com horários flexíveis',
        detalhes: [
          'Limpeza de escritórios',
          'Manutenção de áreas comuns',
          'Limpeza de vidros e fachadas',
          'Gestão de resíduos',
          'Serviços personalizados'
        ]
      },
    },
    footer: {
      direitos: 'Todos os direitos reservados.',
      whatsapp: 'Chat WhatsApp',
      endereco: 'Viana do Castelo, Portugal',
      email: 'info@viana-limpezas.pt',
      telefone: '+351 91 234 5678',
    },
    sobre: {
      titulo: 'Sobre Viana',
      descricao1: 'Viana é uma empresa especializada em serviços de limpeza profissional, com mais de uma década de experiência em Viana do Castelo.',
      descricao2: 'Somos dedicados a proporcionar ambientes limpos, higiénicos e acolhedores, com excelência no atendimento e compromisso com a satisfação dos nossos clientes.',
      missao: 'Nossa missão é oferecer serviços de limpeza de qualidade superior que transformam espaços e melhoram a qualidade de vida.',
      visao: 'Ser a empresa referência em serviços de limpeza profissional em toda a região norte de Portugal.',
    },
    contato: {
      titulo: 'Entre em Contato',
      subtitulo: 'Estamos prontos para ajudar com suas necessidades',
      nome: 'Nome',
      email: 'Email',
      telefone: 'Telefone',
      mensagem: 'Mensagem',
      enviar: 'Enviar Mensagem',
      enviado: 'Mensagem enviada com sucesso!',
      whatsapp: 'Enviar por WhatsApp',
      endereco: 'Endereço',
      horario: 'Horário de Atendimento',
    },
  },
  en: {
    nav: {
      inicio: 'Home',
      sobre: 'About',
      servicos: 'Services',
      contato: 'Contact',
    },
    hero: {
      titulo: 'Welcome to Viana',
      subtitulo: 'Professional Cleaning Services in Viana do Castelo',
      descricao: 'Excellence in cleanliness and hygiene for your home and business',
      cta: 'Request Quote',
    },
    services: {
      titulo: 'Our Services',
      limpeza_residencial: {
        titulo: 'Residential Cleaning',
        descricao: 'Complete cleaning services for homes, apartments and condominiums with quality eco-friendly products',
        detalhes: [
          'Deep and regular cleaning',
          'Window and glass cleaning',
          'Carpet and upholstery cleaning',
          'Disinfection and sanitization',
          'Space organization'
        ]
      },
      limpeza_empresarial: {
        titulo: 'Commercial Cleaning',
        descricao: 'Specialized solutions for companies, offices, shops and commercial spaces with flexible schedules',
        detalhes: [
          'Office cleaning',
          'Common areas maintenance',
          'Windows and facades cleaning',
          'Waste management',
          'Customized services'
        ]
      },
    },
    footer: {
      direitos: 'All rights reserved.',
      whatsapp: 'WhatsApp Chat',
      endereco: 'Viana do Castelo, Portugal',
      email: 'info@viana-limpezas.pt',
      telefone: '+351 91 234 5678',
    },
    sobre: {
      titulo: 'About Viana',
      descricao1: 'Viana is a specialized company in professional cleaning services, with over a decade of experience in Viana do Castelo.',
      descricao2: 'We are dedicated to providing clean, hygienic and welcoming environments, with excellence in service and commitment to our customers satisfaction.',
      missao: 'Our mission is to provide superior quality cleaning services that transform spaces and improve quality of life.',
      visao: 'To be the leading company in professional cleaning services throughout the northern region of Portugal.',
    },
    contato: {
      titulo: 'Get In Touch',
      subtitulo: 'We are ready to help with your needs',
      nome: 'Name',
      email: 'Email',
      telefone: 'Phone',
      mensagem: 'Message',
      enviar: 'Send Message',
      enviado: 'Message sent successfully!',
      whatsapp: 'Send via WhatsApp',
      endereco: 'Address',
      horario: 'Business Hours',
    },
  },
}
