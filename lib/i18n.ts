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
    values: {
      titulo: 'Nossos Compromissos',
      items: [
        { 
          icon: '💚', 
          title: 'Produtos Eco-Friendly', 
          desc: '100% dos produtos são biodegradáveis e seguros para sua família e animais de estimação.'
        },
        { 
          icon: '✅', 
          title: 'Satisfação Garantida', 
          desc: 'Se não ficar satisfeito, refazemos o trabalho sem custo adicional. Sua satisfação é nossa prioridade.'
        },
        { 
          icon: '🤝', 
          title: 'Atenção Personalizada', 
          desc: 'Cada cliente é único. Adaptamos nossos serviços às suas necessidades específicas.'
        },
        { 
          icon: '💝', 
          title: 'Simpatia e Cuidado', 
          desc: 'Tratamos seu lar como se fosse o nosso. Com respeito, discrição e máxima atenção aos detalhes.'
        },
      ]
    },
    testimonials: {
      titulo: 'O Que Nossos Clientes Dizem',
      items: [
        { name: 'Maria Silva', role: 'Proprietária', text: 'Serviço impecável! Recomendo a Viana para todos os meus amigos. Equipe profissional, atenciosa e muito simpática.', rating: 5 },
        { name: 'João Santos', role: 'Gerente Comercial', text: 'A Viana transformou a limpeza do nosso escritório. Produtos eco-friendly e pessoal que realmente se importa com a qualidade.', rating: 5 },
        { name: 'Ana Oliveira', role: 'Diretora', text: 'Pontual, confiável e com excelente qualidade. A garantia de satisfação nos deu confiança total. Verdadeiros parceiros!', rating: 5 },
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
    blog: {
      titulo: 'Blog de Dicas',
      items: [
        { titulo: 'Como Limpar Vidros Sem Deixar Marcas', data: '15 Dec 2025', resumo: 'Aprenda as técnicas profissionais para limpar vidros e deixá-los impecáveis.', categoria: 'Dicas' },
        { titulo: 'Produtos Eco-Friendly: Melhores para Sua Saúde', data: '12 Dec 2025', resumo: 'Conheça os benefícios dos produtos sustentáveis para sua família.', categoria: 'Sustentabilidade' },
        { titulo: 'Agendamento Regular: Por Que É Importante?', data: '10 Dec 2025', resumo: 'Descubra como manter seus espaços sempre limpos com limpezas periódicas.', categoria: 'Serviços' },
      ]
    },
    calendar: {
      titulo: 'Agendar Serviço',
      selectDate: 'Selecionar Data',
      selectTime: 'Selecionar Horário',
      confirm: 'Confirmar Agendamento',
      availableTimes: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
    },
    location: {
      titulo: 'Nos Visite',
      descricao: 'Localizado no coração de Viana do Castelo',
      endereco: 'Avenida Principal, 123 - Viana do Castelo',
      telefone: '+351 91 234 5678',
      email: 'info@viana-limpezas.pt',
      horarios: 'Seg-Sex: 9h-18h | Sáb: 9h-13h',
    },
    newsletter: {
      titulo: 'Receba Nossas Dicas & Promoções',
      descricao: 'Inscreva-se na nossa newsletter para receber dicas de limpeza e ofertas exclusivas',
      placeholder: 'Seu email...',
      button: 'Inscrever-se',
      success: 'Sucesso! Verificou seu email.',
      error: 'Email inválido. Tente novamente.',
    },
    chat: {
      titulo: 'Suporte Viana',
      placeholder: 'Digite sua mensagem...',
      send: 'Enviar',
      messages: [
        { bot: true, text: 'Olá! 👋 Como podemos ajudar?' },
        { bot: true, text: 'Temos respostas rápidas sobre serviços, preços e agendamento.' },
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
      organizacao: {
        titulo: 'Organização de Cozinha e Roupa',
        descricao: 'Organização profissional de armários, despensas, roupa e lavandaria. Tudo arrumado, funcional e bonito!',
        detalhes: [
          'Arrumação de armários e despensas',
          'Organização de roupa e lavandaria',
          'Dicas de otimização de espaço',
          'Soluções personalizadas para cada cliente'
        ]
      },
    },
    trust: {
      anos: 'Anos de Experiência',
      clientes: 'Clientes Satisfeitos',
      satisfacao: 'Taxa de Satisfação',
      eco: 'Produtos Eco-Friendly',
    },
    guarantee: {
      titulo: 'Garantia de Satisfação Total',
      subtitulo: 'Se não ficar satisfeito, refazemos sem custos adicionais',
      descricao: 'A sua satisfação é a nossa prioridade. Se algo não estiver perfeito, entre em contacto até ao próximo dia útil e corrigiremos sem qualquer custo extra. Confiança garantida há mais de 10 anos.',
      cta: 'Conhecer a Nossa Garantia'
    },
    certifications: {
      titulo: 'Certificados e Reconhecimentos',
      items: [
        { name: 'ISO 9001', desc: 'Gestão de Qualidade' },
        { name: 'Eco-Certified', desc: 'Produtos Sustentáveis' },
        { name: 'Seguro Total', desc: 'Profissionais Segurados' },
        { name: 'Background Checked', desc: 'Equipa Verificada' }
      ]
    },
    impact: {
      titulo: 'Impacto Social',
      subtitle: 'Cada serviço contribui para um mundo melhor',
      trees: 'Árvores plantadas',
      charity: 'Apoio a instituições locais',
      carbon: 'Compensação de carbono'
    },
    giftVoucher: {
      titulo: 'Ofereça o Presente do Tempo Livre',
      subtitulo: 'Certificados de presente para quem mais gosta',
      descricao: 'Surpreenda alguém especial com um certificado de limpeza. O presente perfeito para pais, avós, amigos ou colegas. Válido por 12 meses.',
      cta: 'Comprar Certificado',
      valores: ['€50', '€100', '€150', '€200', 'Personalizado']
    },
    membership: {
      titulo: 'Clube de Fidelidade Viana',
      subtitulo: 'Poupe até 20% em todos os serviços',
      descricao: 'Junte-se ao nosso clube exclusivo e desfrute de vantagens especiais, descontos recorrentes, prioridade no agendamento e muito mais.',
      benefits: [
        '20% desconto em todos os serviços',
        'Prioridade no agendamento',
        'Sem taxas de cancelamento',
        'Consultoria gratuita de organização',
        'Produtos eco-friendly premium'
      ],
      cta: 'Aderir Agora',
      price: '€19,90/mês'
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
    values: {
      titulo: 'Our Commitments',
      items: [
        { 
          icon: '💚', 
          title: 'Eco-Friendly Products', 
          desc: '100% biodegradable products that are safe for your family and pets.'
        },
        { 
          icon: '✅', 
          title: 'Satisfaction Guaranteed', 
          desc: 'If you\'re not satisfied, we redo the work at no additional cost. Your satisfaction is our priority.'
        },
        { 
          icon: '🤝', 
          title: 'Personalized Attention', 
          desc: 'Every client is unique. We adapt our services to your specific needs.'
        },
        { 
          icon: '💝', 
          title: 'Care & Sympathy', 
          desc: 'We treat your home as if it were ours. With respect, discretion and maximum attention to detail.'
        },
      ]
    },
    testimonials: {
      titulo: 'What Our Clients Say',
      items: [
        { name: 'Maria Silva', role: 'Property Owner', text: 'Impeccable service! I recommend Viana to all my friends. Professional, attentive and very kind team.', rating: 5 },
        { name: 'João Santos', role: 'Commercial Manager', text: 'Viana transformed our office cleaning. Eco-friendly products and staff that truly care about quality.', rating: 5 },
        { name: 'Ana Oliveira', role: 'Director', text: 'Punctual, reliable and excellent quality. The satisfaction guarantee gave us full confidence. True partners!', rating: 5 },
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
    blog: {
      titulo: 'Blog & Tips',
      items: [
        { titulo: 'How to Clean Glass Without Leaving Marks', data: '15 Dec 2025', resumo: 'Learn the professional techniques to clean glass and leave it impeccable.', categoria: 'Tips' },
        { titulo: 'Eco-Friendly Products: Better for Your Health', data: '12 Dec 2025', resumo: 'Discover the benefits of sustainable products for your family.', categoria: 'Sustainability' },
        { titulo: 'Regular Scheduling: Why Is It Important?', data: '10 Dec 2025', resumo: 'Find out how to keep your spaces always clean with periodic cleaning.', categoria: 'Services' },
      ]
    },
    calendar: {
      titulo: 'Book Service',
      selectDate: 'Select Date',
      selectTime: 'Select Time',
      confirm: 'Confirm Booking',
      availableTimes: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
    },
    location: {
      titulo: 'Visit Us',
      descricao: 'Located in the heart of Viana do Castelo',
      endereco: 'Main Avenue, 123 - Viana do Castelo',
      telefone: '+351 91 234 5678',
      email: 'info@viana-limpezas.pt',
      horarios: 'Mon-Fri: 9am-6pm | Sat: 9am-1pm',
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
      organizacao: {
        titulo: 'Kitchen & Laundry Organization',
        descricao: 'Professional organization of cabinets, pantries, wardrobes and laundry. Everything organized, functional and beautiful!',
        detalhes: [
          'Cabinet and pantry organization',
          'Wardrobe and laundry organization',
          'Space optimization tips',
          'Customized solutions for each client'
        ]
      },
    },
    trust: {
      anos: 'Years of Experience',
      clientes: 'Satisfied Clients',
      satisfacao: 'Satisfaction Rate',
      eco: 'Eco-Friendly Products',
    },    guarantee: {
      titulo: 'Total Satisfaction Guarantee',
      subtitulo: 'If you\'re not satisfied, we\'ll redo it at no extra cost',
      descricao: 'Your satisfaction is our priority. If something isn\'t perfect, contact us by the next business day and we\'ll make it right at no additional charge. Trusted for over 10 years.',
      cta: 'Learn About Our Guarantee'
    },
    certifications: {
      titulo: 'Certifications and Recognition',
      items: [
        { name: 'ISO 9001', desc: 'Quality Management' },
        { name: 'Eco-Certified', desc: 'Sustainable Products' },
        { name: 'Fully Insured', desc: 'Insured Professionals' },
        { name: 'Background Checked', desc: 'Verified Team' }
      ]
    },
    impact: {
      titulo: 'Social Impact',
      subtitle: 'Every service contributes to a better world',
      trees: 'Trees planted',
      charity: 'Support for local charities',
      carbon: 'Carbon offset'
    },
    giftVoucher: {
      titulo: 'Give the Gift of Free Time',
      subtitulo: 'Gift certificates for those you love most',
      descricao: 'Surprise someone special with a cleaning certificate. The perfect gift for parents, grandparents, friends or colleagues. Valid for 12 months.',
      cta: 'Buy Certificate',
      valores: ['€50', '€100', '€150', '€200', 'Custom']
    },
    membership: {
      titulo: 'Viana Membership Club',
      subtitulo: 'Save up to 20% on all services',
      descricao: 'Join our exclusive club and enjoy special perks, recurring discounts, priority booking and much more.',
      benefits: [
        '20% discount on all services',
        'Priority booking',
        'No cancellation fees',
        'Free organization consultation',
        'Premium eco-friendly products'
      ],
      cta: 'Join Now',
      price: '€19.90/month'
    },    footer: {
      direitos: 'All rights reserved © 2025 Viana Cleaning.',
      whatsapp: 'WhatsApp Chat',
      endereco: 'Viana do Castelo, Portugal',
      email: 'info@viana-limpezas.pt',
      telefone: '+351 91 234 5678',
      horarios: 'Mon-Sat: 8am-6pm | Sun: 9am-1pm'
    },
    newsletter: {
      titulo: 'Get Our Tips & Exclusive Offers',
      descricao: 'Subscribe to our newsletter for cleaning tips and exclusive deals',
      placeholder: 'Your email...',
      button: 'Subscribe',
      success: 'Success! Please check your email.',
      error: 'Invalid email. Try again.',
    },
    chat: {
      titulo: 'Viana Support',
      placeholder: 'Type your message...',
      send: 'Send',
      messages: [
        { bot: true, text: 'Hello! 👋 How can we help?' },
        { bot: true, text: 'We have quick answers about services, pricing and booking.' },
      ]
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
