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
      titulo: 'Limpeza Profissional de Excelência',
      subtitulo: 'Transformamos seus espaços em ambientes impecáveis',
      descricao: 'Mais de 10 anos de experiência em serviços de limpeza residencial e comercial',
      cta: 'Agendar Agora',
      badge: 'Certificado Eco-Friendly • Recomendado'
    },
    testimonials: {
      titulo: 'O Que Nossos Clientes Dizem',
      items: [
        { name: 'Maria Silva', role: 'Proprietária', text: 'Serviço impecável! Recomendo a Viana para todos os meus amigos. Equipe profissional e atenciosa.', rating: 5 },
        { name: 'João Santos', role: 'Gerente Comercial', text: 'A Viana transformou a limpeza do nosso escritório. Agora sim temos um ambiente limpo e organizado.', rating: 5 },
        { name: 'Ana Oliveira', role: 'Diretora', text: 'Pontual, confiável e com excelente qualidade. A Viana é parceira de confiança para nosso condomínio.', rating: 5 },
      ]
    },
    gallery: {
      titulo: 'Galeria de Trabalhos',
      antes: 'Antes',
      depois: 'Depois',
    },
    pricing: {
      titulo: 'Tabela de Preços',
      descricao: 'Pacotes personalizados para suas necessidades',
      basico: {
        nome: 'Básico',
        preco: '€99',
        descricao: 'Limpeza completa residencial',
        features: ['Até 100m²', 'Limpeza geral', 'Banheiros', 'Cozinha', 'Áreas comuns']
      },
      profissional: {
        nome: 'Profissional',
        preco: '€199',
        descricao: 'Limpeza avançada com detalhes',
        popular: true,
        features: ['Até 200m²', 'Limpeza profunda', 'Janelas', 'Estofos básicos', 'Prioridade', 'Agendamento semanal']
      },
      premium: {
        nome: 'Premium',
        preco: '€299',
        descricao: 'Serviço completo e detalhado',
        features: ['Até 300m²', 'Limpeza ultra profunda', 'Vidros e fachadas', 'Estofos premium', 'Organização', 'Suporte 24h']
      },
    },
    faq: {
      titulo: 'Perguntas Frequentes',
      items: [
        { q: 'Qual é a duração típica de uma limpeza?', a: 'Dependendo do tamanho e tipo do espaço, entre 2 a 4 horas. Fornecemos estimativa gratuita.' },
        { q: 'Usam produtos ecológicos?', a: 'Sim! 100% dos nossos produtos são eco-friendly e seguros para crianças e animais de estimação.' },
        { q: 'Posso agendar para um fim de semana?', a: 'Claro! Oferecemos agendamento flexível, incluindo fins de semana e feriados.' },
        { q: 'Qual é a política de cancelamento?', a: 'Cancelamentos com 24h de antecedência recebem reembolso total. Sem compromissos de contrato.' },
        { q: 'Vocês fazem limpeza comercial?', a: 'Sim! Temos experiência em escritórios, lojas, hotéis e espaços comerciais diversos.' },
        { q: 'Como faço para receber um orçamento?', a: 'Clique em "Agendar Agora" ou nos contacte via WhatsApp. Resposta em menos de 1 hora.' },
      ]
    },
    services: {
      titulo: 'Nossos Serviços',
      limpeza_residencial: {
        titulo: 'Limpeza Residencial',
        descricao: 'Serviços completos de limpeza para casas, apartamentos e condomínios',
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
        descricao: 'Soluções especializadas para empresas, escritórios, lojas e espaços comerciais',
        detalhes: [
          'Limpeza de escritórios',
          'Manutenção de áreas comuns',
          'Limpeza de vidros e fachadas',
          'Gestão de resíduos',
          'Serviços personalizados'
        ]
      },
    },
    trust: {
      anos: 'Anos de Experiência',
      clientes: 'Clientes Satisfeitos',
      satisfacao: 'Taxa de Satisfação',
      eco: 'Produtos Eco-Friendly',
    },
    footer: {
      direitos: 'Todos os direitos reservados © 2025 Viana Limpezas.',
      whatsapp: 'Chat WhatsApp',
      endereco: 'Viana do Castelo, Portugal',
      email: 'info@viana-limpezas.pt',
      telefone: '+351 91 234 5678',
      horarios: 'Seg-Sáb: 8h-18h | Dom: 9h-13h'
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
      titulo: 'Professional Cleaning Excellence',
      subtitulo: 'Transforming your spaces into immaculate environments',
      descricao: 'Over 10 years of experience in residential and commercial cleaning services',
      cta: 'Book Now',
      badge: 'Eco-Certified • Recommended'
    },
    testimonials: {
      titulo: 'What Our Clients Say',
      items: [
        { name: 'Maria Silva', role: 'Property Owner', text: 'Impeccable service! I recommend Viana to all my friends. Professional and attentive team.', rating: 5 },
        { name: 'João Santos', role: 'Commercial Manager', text: 'Viana transformed our office cleaning. Now we have a truly clean and organized environment.', rating: 5 },
        { name: 'Ana Oliveira', role: 'Director', text: 'Punctual, reliable and excellent quality. Viana is a trusted partner for our condominium.', rating: 5 },
      ]
    },
    gallery: {
      titulo: 'Work Gallery',
      antes: 'Before',
      depois: 'After',
    },
    pricing: {
      titulo: 'Pricing Plans',
      descricao: 'Customized packages for your needs',
      basico: {
        nome: 'Basic',
        preco: '€99',
        descricao: 'Complete residential cleaning',
        features: ['Up to 100m²', 'General cleaning', 'Bathrooms', 'Kitchen', 'Common areas']
      },
      profissional: {
        nome: 'Professional',
        preco: '€199',
        descricao: 'Advanced cleaning with details',
        popular: true,
        features: ['Up to 200m²', 'Deep cleaning', 'Windows', 'Basic upholstery', 'Priority', 'Weekly scheduling']
      },
      premium: {
        nome: 'Premium',
        preco: '€299',
        descricao: 'Complete and detailed service',
        features: ['Up to 300m²', 'Ultra deep cleaning', 'Glass and facades', 'Premium upholstery', 'Organization', '24h support']
      },
    },
    faq: {
      titulo: 'Frequently Asked Questions',
      items: [
        { q: 'What is the typical duration of a cleaning?', a: 'Depending on size and space type, between 2 to 4 hours. Free estimate provided.' },
        { q: 'Do you use eco-friendly products?', a: 'Yes! 100% of our products are eco-friendly and safe for children and pets.' },
        { q: 'Can I schedule for weekends?', a: 'Of course! We offer flexible scheduling, including weekends and holidays.' },
        { q: 'What is your cancellation policy?', a: 'Cancellations with 24h notice receive full refund. No contract commitments.' },
        { q: 'Do you offer commercial cleaning?', a: 'Yes! We have experience with offices, shops, hotels and various commercial spaces.' },
        { q: 'How do I get a quote?', a: 'Click "Book Now" or contact us via WhatsApp. Response in less than 1 hour.' },
      ]
    },
    services: {
      titulo: 'Our Services',
      limpeza_residencial: {
        titulo: 'Residential Cleaning',
        descricao: 'Complete cleaning services for homes, apartments and condominiums',
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
        descricao: 'Specialized solutions for companies, offices, shops and commercial spaces',
        detalhes: [
          'Office cleaning',
          'Common areas maintenance',
          'Windows and facades cleaning',
          'Waste management',
          'Customized services'
        ]
      },
    },
    trust: {
      anos: 'Years of Experience',
      clientes: 'Satisfied Clients',
      satisfacao: 'Satisfaction Rate',
      eco: 'Eco-Friendly Products',
    },
    footer: {
      direitos: 'All rights reserved © 2025 Viana Cleaning.',
      whatsapp: 'WhatsApp Chat',
      endereco: 'Viana do Castelo, Portugal',
      email: 'info@viana-limpezas.pt',
      telefone: '+351 91 234 5678',
      horarios: 'Mon-Sat: 8am-6pm | Sun: 9am-1pm'
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
