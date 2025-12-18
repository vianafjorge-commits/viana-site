# 🔧 SOLUÇÃO: Erro no Git Push

## O Problema
❌ "Repository not found" - O repositório não existe no GitHub

## A Solução

### OPÇÃO 1: Usar HTTPS com Token (MAIS FÁCIL)

1. **Gerar Token no GitHub:**
   - Vá em: https://github.com/settings/tokens
   - Clique em "Generate new token (classic)"
   - Nome: "viana-site-token"
   - Selecione: `repo` (acesso completo)
   - Clique em "Generate token"
   - **COPIE O TOKEN** (vai aparecer só uma vez!)

2. **Fazer Push com Token:**
   ```bash
   cd /private/tmp/viana-site
   git push -u origin main
   ```
   - Username: `vianafjorge`
   - Password: Cole o TOKEN (não a senha)

---

### OPÇÃO 2: Usar SSH (RECOMENDADO)

1. **Gerar chave SSH:**
   ```bash
   ssh-keygen -t ed25519 -C "jorge@viana.pt"
   # Pressione Enter 3 vezes (aceite padrões)
   ```

2. **Adicionar chave no GitHub:**
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
   - Copie a saída
   - Vá em: https://github.com/settings/keys
   - Clique em "New SSH key"
   - Cole a chave
   - Clique em "Add SSH key"

3. **Alterar URL do repositório:**
   ```bash
   cd /private/tmp/viana-site
   git remote set-url origin git@github.com:vianafjorge/viana-site.git
   git push -u origin main
   ```

---

## ✅ Verificar se funcionou

```bash
git remote -v
# Deve mostrar seu username correto
```

---

## 🎯 PRÓXIMO PASSO

Depois de resolver o push, vá em:
https://vercel.com → New Project → Conecte seu GitHub

Vercel faz o deploy automático!

---

**Qual opção prefere? HTTPS (mais fácil) ou SSH (mais seguro)?**
