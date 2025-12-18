// AI Engine para Chatbot Inteligente

export type Locale = 'pt' | 'en'

interface Intent {
  type: 'greeting' | 'pricing' | 'booking' | 'services' | 'contact' | 'location' | 'general' | 'complaint' | 'unknown'
  confidence: number
  keywords: string[]
}

interface AIResponse {
  text: string
  suggestions?: string[]
  action?: 'whatsapp' | 'email' | 'call' | 'book' | 'none'
  sentiment?: 'positive' | 'neutral' | 'negative'
}

const intentPatterns = {
  pt: {
    greeting: ['oi', 'olá', 'opa', 'hey', 'alô', 'bom dia', 'boa tarde', 'boa noite'],
    pricing: ['preço', 'valor', 'custa', 'tabela', 'plano', 'pacote', 'quanto custa', 'qual valor', 'orçamento'],
    booking: ['agendar', 'marcar', 'horário', 'data', 'quando', 'disponível', 'reservar', 'agendar limpeza'],
    services: ['serviço', 'limpeza', 'residencial', 'comercial', 'escritório', 'casa', 'apartamento', 'condomínio'],
    contact: ['contato', 'telefone', 'email', 'como chego', 'endereço', 'comunicar', 'falar com', 'atendimento'],
    location: ['onde', 'localização', 'endereço', 'fica', 'como chego', 'mapa', 'rua', 'avenida'],
  },
  en: {
    greeting: ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'howdy'],
    pricing: ['price', 'cost', 'value', 'table', 'plan', 'package', 'how much', 'what price', 'quote'],
    booking: ['book', 'schedule', 'appointment', 'time', 'date', 'when', 'available', 'reserve'],
    services: ['service', 'cleaning', 'residential', 'commercial', 'office', 'house', 'apartment'],
    contact: ['contact', 'phone', 'email', 'reach', 'address', 'communicate', 'talk to', 'support'],
    location: ['where', 'location', 'address', 'how to get', 'map', 'street', 'avenue'],
  }
}

const responses = {
  pt: {
    greeting: [
      'Olá! 👋 Bem-vindo à Viana Limpezas! Como posso ajudá-lo?',
      'Opa! Tudo bem? 😊 Estou aqui para responder suas dúvidas sobre nossos serviços.',
      'Que bom ter você aqui! ✨ O que você gostaria de saber?',
    ],
    pricing: [
      'Temos 3 planos principais:\n💰 Básico: €99\n💰 Profissional: €199\n💰 Premium: €299\n\nQual te interessa?',
      'Nossas tarifas são competitivas e personalizadas. Quer detalhes sobre algum plano específico?',
    ],
    booking: [
      'Ótimo! 📅 Podemos agendar um horário para você!\n\n⏰ Horários disponíveis:\n09:00 - 10:00 - 11:00\n14:00 - 15:00 - 16:00\n\nQual te convém?',
      'Qual data você prefere? Temos disponibilidade próximas duas semanas!',
    ],
    services: [
      '🏠 Limpeza Residencial: casas, apartamentos, condomínios\n🏢 Limpeza Comercial: escritórios, lojas, espaços corporativos\n\nQue tipo de limpeza precisa?',
      'Trabalhamos com produtos 100% eco-friendly! Qual serviço te interessa?',
    ],
    contact: [
      '📞 Telefone: +351 91 234 5678\n📧 Email: info@viana-limpezas.pt\n💬 Também estamos aqui no chat!\n\nComo prefere falar conosco?',
      'Posso ajudar com mais informações ou conectar você direto com nosso time!',
    ],
    location: [
      '📍 Nos visite em Viana do Castelo!\n\nAvenida Principal, 123 - Viana do Castelo\n\nSeg-Sex: 9h-18h | Sáb: 9h-13h',
      'Quer mapas? Temos um mapa interativo no site!',
    ],
    general: [
      'Entendi! Quer saber mais sobre algo específico?',
      'Que interessante! Como posso ajudar?',
      'Deixa eu pensar... Qual é exatamente sua dúvida?',
    ],
    unknown: [
      'Desculpa, não entendi bem. Pode reformular?',
      'Hmm, não tenho resposta exata para isso. Quer agendar uma conversa com nosso time?',
    ],
  },
  en: {
    greeting: [
      'Hello! 👋 Welcome to Viana Cleaning! How can I help?',
      'Hey there! 😊 I\'m here to answer any questions about our services.',
      'Great to have you here! ✨ What would you like to know?',
    ],
    pricing: [
      'We have 3 main plans:\n💰 Basic: €99\n💰 Professional: €199\n💰 Premium: €299\n\nWhich interests you?',
      'Our rates are competitive and customizable. Want details about any plan?',
    ],
    booking: [
      'Great! 📅 Let\'s schedule an appointment!\n\n⏰ Available times:\n09:00 - 10:00 - 11:00\n14:00 - 15:00 - 16:00\n\nWhat works for you?',
      'What date do you prefer? We have availability for the next two weeks!',
    ],
    services: [
      '🏠 Residential Cleaning: houses, apartments, condos\n🏢 Commercial Cleaning: offices, shops, corporate spaces\n\nWhich service do you need?',
      'We work with 100% eco-friendly products! What interests you?',
    ],
    contact: [
      '📞 Phone: +351 91 234 5678\n📧 Email: info@viana-limpezas.pt\n💬 We\'re also here in chat!\n\nHow do you prefer to reach us?',
      'I can help with more information or connect you with our team!',
    ],
    location: [
      '📍 Visit us in Viana do Castelo!\n\nMain Avenue, 123 - Viana do Castelo\n\nMon-Fri: 9am-6pm | Sat: 9am-1pm',
      'Want a map? We have an interactive map on the website!',
    ],
    general: [
      'Got it! Want to know about something specific?',
      'That\'s interesting! How can I help?',
      'Let me think... What\'s your exact question?',
    ],
    unknown: [
      'Sorry, I didn\'t understand. Can you rephrase?',
      'Hmm, I don\'t have an exact answer for that. Want to schedule a call with our team?',
    ],
  }
}

const suggestions = {
  pt: {
    greeting: ['Ver Preços', 'Agendar', 'Sobre Nós'],
    pricing: ['Detalhes', 'Agendar Agora', 'Falar com Especialista'],
    booking: ['Confirmar', 'Ver Horários', 'Mais Tarde'],
    services: ['Conhecer Mais', 'Agendar Serviço', 'Dúvidas'],
    contact: ['Telefonar', 'Email', 'Conversar'],
  },
  en: {
    greeting: ['View Prices', 'Book Now', 'About Us'],
    pricing: ['Learn More', 'Schedule', 'Talk to Expert'],
    booking: ['Confirm', 'See Times', 'Later'],
    services: ['Learn More', 'Book Now', 'Questions'],
    contact: ['Call', 'Email', 'Chat'],
  }
}

export function detectIntent(message: string, locale: Locale): Intent {
  const text = message.toLowerCase().trim()
  const patterns = intentPatterns[locale]
  
  let bestMatch: Intent = {
    type: 'unknown',
    confidence: 0,
    keywords: []
  }

  Object.entries(patterns).forEach(([intentType, keywords]) => {
    const matches = keywords.filter(keyword => text.includes(keyword))
    const confidence = matches.length / keywords.length
    
    if (confidence > bestMatch.confidence) {
      bestMatch = {
        type: intentType as Intent['type'],
        confidence,
        keywords: matches
      }
    }
  })

  return bestMatch
}

export function generateAIResponse(intent: Intent, locale: Locale): AIResponse {
  const responseList = responses[locale][intent.type]
  const suggestionList = suggestions[locale][intent.type]
  
  const responseText = responseList[Math.floor(Math.random() * responseList.length)]
  
  return {
    text: responseText,
    suggestions: suggestionList,
    action: intent.type === 'booking' ? 'book' : 
            intent.type === 'contact' ? 'call' : 
            'none',
    sentiment: intent.type === 'complaint' ? 'negative' : 'positive'
  }
}

export function shouldEscalateToHuman(message: string, locale: Locale): boolean {
  const escalationKeywords = {
    pt: ['problema', 'reclamação', 'insatisfeito', 'erro', 'demora', 'falar com gerente'],
    en: ['problem', 'complaint', 'unsatisfied', 'error', 'delay', 'speak with manager']
  }
  
  const keywords = escalationKeywords[locale]
  return keywords.some(keyword => message.toLowerCase().includes(keyword))
}

export function getContextualSuggestion(conversationLength: number, locale: Locale): string[] {
  if (conversationLength === 0) {
    return suggestions[locale].greeting
  } else if (conversationLength === 2) {
    return locale === 'pt' 
      ? ['Ver mais detalhes', 'Agendar agora', 'Falar com alguém']
      : ['View more', 'Book now', 'Speak with someone']
  } else if (conversationLength > 4) {
    return locale === 'pt'
      ? ['Finalizar conversa', 'Agendar visita', 'Receber proposta']
      : ['End chat', 'Schedule visit', 'Get quote']
  }
  return []
}
