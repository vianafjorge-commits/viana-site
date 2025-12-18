# Viana Limpezas - Website

Um site profissional e responsivo para serviços de limpeza em Viana do Castelo, criado com **Next.js 14**, **React 18** e **TypeScript**.

## ✨ Características

- ✅ Design moderno e profissional
- 🌐 Suporte bilíngue (Português/Inglês)
- 📱 Totalmente responsivo (mobile-first)
- 💬 Integração com WhatsApp
- ⚡ Performance otimizada com Next.js
- 🎨 Animações e transições suaves
- 📊 Seção de estatísticas
- 🏠 2 serviços principais (Residencial & Empresarial)

## 📄 Páginas Disponíveis

- **Início (/)** - Página principal com hero section, serviços e estatísticas
- **Sobre (/sobre)** - Informações sobre a empresa, missão e visão
- **Serviços (/servicos)** - Detalhes completos dos serviços de limpeza
- **Contato (/contato)** - Formulário de contato e integração WhatsApp

## 🚀 Deploy Online

### Opção 1: Vercel (Recomendado)

Vercel é a plataforma oficial Next.js com deploy automático.

**Passos:**

1. **Criar repositório GitHub:**
   - Vá para https://github.com/new
   - Nome: `viana-site`
   - Clique em "Create repository"

2. **Fazer push do código:**
   ```bash
   git remote add origin https://github.com/SEU_USUARIO/viana-site.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy no Vercel:**
   - Acesse https://vercel.com
   - Clique em "New Project"
   - Selecione "Import Git Repository"
   - Conecte seu GitHub
   - Selecione `viana-site`
   - Clique em "Deploy"

**Resultado:** Seu site estará online em ~5 minutos!  
URL: `https://seu-projeto.vercel.app`

### Opção 2: Netlify

Alternativa popular com suporte completo a Next.js.

1. Acesse https://netlify.com
2. Clique "New site from Git"
3. Conecte seu GitHub
4. Selecione `viana-site`
5. Deploy automático

### Opção 3: Domínio Customizado

Para usar `viana-limpezas.pt`:

1. Compre domínio em [namecheap.com](https://namecheap.com) (~€8/ano)
2. Em Vercel → Settings → Domains
3. Adicione seu domínio
4. Configure DNS conforme instruções

## 🛠️ Desenvolvimento Local

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/viana-site.git
cd viana-site

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000`

### Build para Produção

```bash
npm run build
npm start
```

## 📦 Estrutura do Projeto

```
viana-site/
├── app/
│   ├── layout.tsx          # Layout raiz
│   ├── page.tsx            # Página inicial
│   ├── globals.css         # Estilos globais
│   ├── page.module.css     # Estilos CSS Modules
│   ├── sobre/
│   │   └── page.tsx        # Página sobre
│   ├── servicos/
│   │   └── page.tsx        # Página de serviços
│   └── contato/
│       └── page.tsx        # Página de contato
├── lib/
│   └── i18n.ts            # Traduções (PT/EN)
├── assets/                # Imagens e recursos
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🎨 Personalização

### Mudar Cores
Edite [app/page.module.css](app/page.module.css):
```css
/* Cores principais */
#667eea - Roxo primário
#764ba2 - Roxo secundário
```

### Atualizar Conteúdo
Edite [lib/i18n.ts](lib/i18n.ts) para mudar textos em português e inglês.

### Adicionar Logo
Coloque imagem em `assets/` e importe em [app/page.tsx](app/page.tsx):
```tsx
<Image src="/logo.png" alt="Viana" width={50} height={50} />
```

## 📞 Contato & WhatsApp

O número de WhatsApp está configurado em [app/page.tsx](app/page.tsx):
```tsx
href="https://wa.me/351912345678"  // Altere o número
```

## 🌐 SEO & Meta Tags

Edite [app/layout.tsx](app/layout.tsx) para:
- Título do site
- Descrição
- Favicon
- Open Graph (compartilhamento social)

## 📱 Compatibilidade

- ✅ Chrome/Edge (últimas versões)
- ✅ Firefox (últimas versões)
- ✅ Safari (iOS 12+)
- ✅ Android (5+)

## 🔒 Segurança

- HTTPS automático com Vercel
- Proteção contra bots
- Validação de formulários
- Sem dados sensíveis expostos

## 📊 Analytics

Pode adicionar em Vercel → Analytics para rastrear visitantes.

## 🐛 Troubleshooting

### Site não carrega
```bash
npm run build
# Se tiver erros, verifique imports e tipos
```

### Servidor não inicia
```bash
# Limpe cache e reinstale
rm -rf .next node_modules
npm install
npm run dev
```

### Deploy falha
- Verifique se `package.json` tem todas as dependências
- Certifique-se que não há erros TypeScript
- Veja logs no painel Vercel

## 📝 Licença

Projeto privado © 2025 Viana Limpezas

## 📧 Suporte

Email: info@viana-limpezas.pt  
WhatsApp: +351 91 234 5678  
Local: Viana do Castelo, Portugal

---

**Desenvolvido com ❤️ para Viana Limpezas**
