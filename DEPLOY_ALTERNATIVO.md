# 🚀 DEPLOY ALTERNATIVO - SEM GITHUB PUSH

Se o GitHub Push não está funcionando, use esta alternativa rápida!

## OPÇÃO: Deploy Direto no Vercel (sem GitHub)

### Passo 1: Fazer Upload via ZIP
1. Vá em: https://vercel.com
2. Faça login com GitHub
3. Clique em **"New Project"**
4. Clique em **"Quer fazer upload de um projeto existente?"**
5. Suba os arquivos em ZIP

Ou melhor ainda...

## OPÇÃO MELHOR: GitHub CLI

```bash
# Instalar GitHub CLI
brew install gh

# Fazer login
gh auth login

# Criar repositório
gh repo create viana-site --public --source=. --remote=origin --push
```

## OPÇÃO RÁPIDA: Vercel CLI (RECOMENDADO)

```bash
# Instalar
npm i -g vercel

# Fazer deploy direto
cd /private/tmp/viana-site
vercel

# Siga as instruções
```

**Em segundos seu site estará online!** 🚀

---

Qual opção prefere?
