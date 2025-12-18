# Viana Website

Um site profissional moderno criado com **Next.js**, **React** e **TypeScript**.

## 🚀 Características

- ✨ Design moderno e responsivo
- 🎯 Páginas: Início, Sobre, Serviços, Contato
- 📱 Mobile-first approach
- ⚡ Performance otimizada com Next.js
- 🎨 Estilo clean e profissional

## 📋 Páginas Disponíveis

- **Início (/)** - Página principal com hero section e preview de serviços
- **Sobre (/sobre)** - Informações sobre a empresa
- **Serviços (/servicos)** - Lista de serviços oferecidos
- **Contato (/contato)** - Formulário de contato

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **CSS Modules** - Estilização modular
- **React 18** - Biblioteca UI

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

O site estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
viana-site/
├── app/
│   ├── layout.tsx          # Layout raiz
│   ├── page.tsx            # Página inicial
│   ├── globals.css         # Estilos globais
│   ├── page.module.css     # Estilos da página inicial
│   ├── sobre/
│   │   └── page.tsx        # Página sobre
│   ├── servicos/
│   │   └── page.tsx        # Página de serviços
│   └── contato/
│       └── page.tsx        # Página de contato
├── assets/                 # Pasta para imagens e arquivos
├── package.json
├── tsconfig.json
└── next.config.ts
```

## 🎨 Customização

### Cores
As cores principais estão definidas no CSS:
- Primária: `#667eea` (roxo)
- Secundária: `#764ba2` (roxo escuro)

Para alterar, edite `app/page.module.css` e atualize os valores das cores.

### Conteúdo
Edite os arquivos `.tsx` em cada pasta para atualizar o conteúdo das páginas.

### Logo
Substitua "Viana" no `navbar` pelos textos/imagens desejados.

## 🚀 Deploy

O projeto pode ser facilmente deployado em:
- **Vercel** - Recomendado para Next.js
- **Netlify**
- **GitHub Pages** (com export estático)
- Qualquer hospedagem que suporte Node.js

## 📝 Licença

Projeto criado em 2025.
