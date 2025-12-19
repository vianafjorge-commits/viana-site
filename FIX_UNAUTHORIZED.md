# Resolver Erro "Unauthorized" no n8n

## ❌ Problema: Unauthorized

O erro ocorre quando:
1. Workflow não está **ativo** (toggle desligado)
2. Credenciais não estão configuradas
3. Falta de permissões de acesso

---

## ✅ Solução Rápida

### Passo 1: Ative o Workflow

1. **Abra http://localhost:5678**
2. Clique em **Workflows** (lado esquerdo)
3. Selecione o workflow importado (ex: `github-events-handler`)
4. **Procure o toggle "Active"** no topo direito da tela
5. **Clique para ativar** (deve ficar azul/verde)

### Passo 2: Copie a URL do Webhook

Após ativar, você verá uma mensagem com:
```
Webhook URL: http://localhost:5678/webhook/github-events
```

**Copie esta URL!** Você vai precisar dela.

### Passo 3: Configure o Secret no GitHub

1. Vá para seu repositório no GitHub
2. **Settings** > **Secrets and variables** > **Actions**
3. Clique em **New repository secret**
4. Nome: `N8N_WEBHOOK_URL`
5. Valor: Cole a URL do webhook (ex: `http://localhost:5678/webhook/github-events`)
   - Se estiver testando localmente, use ngrok para expor: `ngrok http 5678`

### Passo 4: Teste o Webhook

```bash
# No terminal, execute:
curl -X POST http://localhost:5678/webhook/github-events \
  -H "Content-Type: application/json" \
  -d '{"test": "data", "branch": "refs/heads/main"}'
```

**Deve retornar**: `{"status":"success"}`

---

## 🔍 Verificar se o Workflow está Ativo

### Via Interface n8n
1. Abra o workflow
2. Veja o toggle no **canto superior direito**
3. Deve estar **azul/verde** (ativo)
4. Se estiver **cinzento** (inativo), clique para ativar

### Via Terminal
```bash
# Verificar status dos workflows
docker-compose exec n8n n8n list:workflows

# Ativar um workflow pelo ID
docker-compose exec n8n n8n workflow:activate <workflow-id>
```

---

## 🚀 Passos Completos (Do Zero)

### 1. Certifique-se que n8n está rodando
```bash
cd /private/tmp/viana-site
docker-compose up -d n8n

# Verificar se está rodando
docker-compose ps
```

### 2. Acesse n8n
```
http://localhost:5678
```

### 3. Importe o workflow
- Clique em **Workflows** > **Import from file**
- Selecione: `/private/tmp/viana-site/n8n-workflows/github-events-handler.json`

### 4. **Ative o workflow** ⭐ (IMPORTANTE!)
- No editor do workflow, clique no toggle **Active** (canto superior direito)
- Deve ficar azul

### 5. Copie a URL do webhook
- Aparecerá uma URL como: `http://localhost:5678/webhook/github-events`

### 6. Configure no GitHub (para produção)
```bash
# Se testar localmente, abra um novo terminal:
ngrok http 5678

# Copie a URL gerada (ex: https://abc123.ngrok.io)
# Use no GitHub: https://abc123.ngrok.io/webhook/github-events
```

### 7. Configure Secret no GitHub
- Repository > Settings > Secrets > New secret
- Nome: `N8N_WEBHOOK_URL`
- Valor: Cole a URL do ngrok ou servidor

### 8. Teste fazendo um push
```bash
git add .
git commit -m "test: webhook"
git push
```

### 9. Verifique a execução
- n8n > **Executions** > Deve mostrar a execução

---

## 🔐 Autenticação n8n

### Se pedir senha no n8n:

**Opção 1: Desabilitar autenticação (desenvolvimento)**

Edite `docker-compose.yml`:

```yaml
n8n:
  image: n8nio/n8n:latest
  environment:
    - N8N_HOST=localhost
    - N8N_PORT=5678
    - N8N_PROTOCOL=http
    - N8N_AUTH_DISABLED=true  # ← Adicione esta linha
```

Depois:
```bash
docker-compose down
docker-compose up -d n8n
```

**Opção 2: Configurar autenticação básica (produção)**

```yaml
n8n:
  image: n8nio/n8n:latest
  environment:
    - N8N_BASIC_AUTH_ACTIVE=true
    - N8N_BASIC_AUTH_USER=admin
    - N8N_BASIC_AUTH_PASSWORD=senha123
```

---

## 🧪 Testes para Verificar

### Teste 1: n8n está rodando?
```bash
curl http://localhost:5678/healthz
# Deve retornar: {"status":"ok"}
```

### Teste 2: Webhook está registrado?
```bash
curl http://localhost:5678/webhook/github-events
# Se workflow ativo: resposta 405 (Method Not Allowed) - isso é BOM!
# Se inativo: resposta 404 (Not Found) - workflow não está ativo
```

### Teste 3: Enviar dados ao webhook?
```bash
curl -X POST http://localhost:5678/webhook/github-events \
  -H "Content-Type: application/json" \
  -d '{
    "event": "push",
    "repository": "test/repo",
    "branch": "refs/heads/main",
    "commit_message": "test commit",
    "author": "Test User"
  }'
```

---

## 📋 Checklist

- [ ] n8n está rodando: `docker-compose ps`
- [ ] Acesso a http://localhost:5678
- [ ] Workflow importado
- [ ] **Toggle "Active" está LIGADO** (azul)
- [ ] Webhook URL copiada
- [ ] Secret `N8N_WEBHOOK_URL` configurado no GitHub
- [ ] ngrok/tunnel ativo (para testes locais)
- [ ] Teste com curl funcionando
- [ ] Push feito
- [ ] Execução visível em n8n > Executions

---

## ⚠️ Erros Comuns

### Erro: "The workflow must be active"
**Solução**: Ative o workflow clicando no toggle **Active**

### Erro: "Webhook not registered"
**Solução**: Workflow não está ativo ou não existe

### Erro: "Connection refused"
**Solução**: n8n não está rodando
```bash
docker-compose up -d n8n
docker-compose logs n8n
```

### Erro: "404 Not Found"
**Solução**: Webhook com caminho errado
- Verifique a URL exata do workflow
- Deve ser: `/webhook/` + nome do webhook

---

## 🎯 Próximo Passo

Depois que o workflow estiver funcionando:

1. Importe o workflow **github-to-slack-discord.json**
2. Configure credenciais do Slack/Discord
3. Customize para suas necessidades

Tudo funcionando agora? 🚀
