# 🚀 GUIA DE DEPLOY - PASSO A PASSO

## ✅ PASSOS PARA COLOCAR SEU SITE ONLINE

### PASSO 1: Criar conta GitHub (5 min)
1. Acesse: https://github.com/signup
2. Complete o formulário
3. Confirme seu email

### PASSO 2: Criar repositório no GitHub (2 min)
1. Vá para: https://github.com/new
2. **Repository name**: viana-site
3. **Description**: Viana Limpezas - Professional Cleaning Services
4. Deixe como "Public"
5. Clique em "Create repository"

### PASSO 3: Fazer Upload do Código (5 min)
Abra o Terminal/iTerm e execute:

```bash
# Navegar até a pasta
cd /private/tmp/viana-site

# Adicionar repositório remoto
git remote add origin https://github.com/SEU_USERNAME/viana-site.git

# Renomear branch
git branch -M main

# Fazer push
git push -u origin main
```

(Substitua SEU_USERNAME pelo seu username do GitHub)

### PASSO 4: Deploy no Vercel (5 min)
1. Acesse: https://vercel.com
2. Clique em "Sign Up" → "Continue with GitHub"
3. Autorize o Vercel
4. Clique em "New Project"
5. Selecione "viana-site"
6. Clique em "Deploy"
7. Aguarde 2-3 minutos

### ✅ PRONTO!
Seu site estará online em: **https://viana-site.vercel.app**

---

## 🌐 PASSO 5: Adicionar Domínio Customizado (OPCIONAL)

### Comprar Domínio
1. Acesse: https://namecheap.com
2. Procure por: **viana-limpezas.pt**
3. Clique em "Add to Cart" e compre (~€8/ano)

### Conectar Domínio no Vercel
1. Vá para: https://vercel.com/dashboard
2. Clique no seu projeto "viana-site"
3. Vá para "Settings" → "Domains"
4. Cole seu domínio: **viana-limpezas.pt**
5. Clique em "Add"
6. Siga as instruções para DNS
7. Aguarde 24h para propagação

### Resultado Final
Seu site estará em: **https://www.viana-limpezas.pt**

---

## 🔄 ATUALIZAR SEU SITE

Sempre que fizer mudanças:

```bash
git add .
git commit -m "Descrição da mudança"
git push
```

Vercel faz redeploy automático em segundos!

---

## 📞 PRECISA DE AJUDA?

- GitHub Issues: https://github.com/seu-repo/issues
- Vercel Support: https://vercel.com/support
- Email: info@viana-limpezas.pt

---

**Status Atual:** Repositório Local ✅ Git Initialized ✅
**Próximo Passo:** Executar os comandos do PASSO 3!
