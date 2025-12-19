# Conectar GitHub com n8n

Este guia mostra como integrar seu repositório GitHub com n8n para automação de workflows.

## 📋 Índice

1. [Configuração Rápida](#configuração-rápida)
2. [Método 1: GitHub Actions → n8n](#método-1-github-actions--n8n)
3. [Método 2: GitHub Webhooks → n8n](#método-2-github-webhooks--n8n)
4. [Workflows Disponíveis](#workflows-disponíveis)
5. [Casos de Uso](#casos-de-uso)

---

## Configuração Rápida

### 1. Inicie o n8n
```bash
docker-compose up -d n8n
```

### 2. Acesse n8n
Abra `http://localhost:5678` e crie sua conta

### 3. Importe os workflows
Em n8n: **Workflows** > **Import from File**
- `github-events-handler.json`
- `github-to-slack-discord.json`

---

## Método 1: GitHub Actions → n8n

### Passo 1: Configure o Secret no GitHub

1. Vá para seu repositório no GitHub
2. **Settings** > **Secrets and variables** > **Actions**
3. Clique em **New repository secret**
4. Nome: `N8N_WEBHOOK_URL`
5. Valor: `http://seu-servidor:5678/webhook/github-events`
   - **Produção**: Use seu domínio público (ex: `https://n8n.seu-dominio.com/webhook/github-events`)
   - **Local/Teste**: Use ngrok ou expose.dev para expor localhost

#### Expondo localhost para testes (opcional)

**Opção A: ngrok**
```bash
# Instalar ngrok
brew install ngrok  # macOS
# ou baixe em https://ngrok.com/download

# Expor porta 5678
ngrok http 5678

# Use a URL gerada (ex: https://abc123.ngrok.io/webhook/github-events)
```

**Opção B: LocalTunnel**
```bash
npx localtunnel --port 5678
```

### Passo 2: Ative o Workflow n8n

1. No n8n, abra o workflow **GitHub Events Handler**
2. Clique em **Active** (toggle no canto superior direito)
3. Copie a URL do webhook mostrada no node "GitHub Webhook"

### Passo 3: GitHub Actions já está configurado!

O workflow `.github/workflows/n8n-integration.yml` já foi criado e irá:
- ✅ Enviar eventos para n8n em cada push
- ✅ Notificar sobre status de builds
- ✅ Disparar em PRs, releases e workflow completions

### Testar
```bash
git add .
git commit -m "test: Testando integração com n8n"
git push
```

Verifique os logs no n8n: **Executions** > Ver última execução

---

## Método 2: GitHub Webhooks → n8n

### Passo 1: Ative o Workflow no n8n

1. No n8n, importe e ative o workflow **GitHub Events Handler**
2. Copie a URL do webhook (ex: `http://seu-servidor:5678/webhook/github-events`)

### Passo 2: Configure Webhook no GitHub

1. Vá para seu repositório no GitHub
2. **Settings** > **Webhooks** > **Add webhook**
3. Configure:
   - **Payload URL**: `https://seu-servidor.com/webhook/github-events`
   - **Content type**: `application/json`
   - **Secret**: (opcional) adicione um token de segurança
   - **SSL verification**: Enable (se usar HTTPS)
   - **Which events**: Selecione os eventos desejados:
     - ✅ Push events
     - ✅ Pull requests
     - ✅ Releases
     - ✅ Workflow runs

4. Clique em **Add webhook**

### Passo 3: Testar

Faça um push ou abra um PR. Verifique:
- GitHub: **Settings** > **Webhooks** > Ver **Recent Deliveries**
- n8n: **Executions** > Ver execução do webhook

---

## Workflows Disponíveis

### 1. **github-events-handler.json**
Processa eventos do GitHub e formata notificações.

**Eventos suportados:**
- Push para branches
- Status de builds
- Pull requests
- Releases

**Ações:**
- Detecta branch (main/develop)
- Formata mensagens
- Prepara dados para notificações

### 2. **github-to-slack-discord.json**
Envia notificações de builds para Slack e Discord.

**Pré-requisitos:**
- Webhook URL do Slack ou Discord
- Configure nas credenciais do n8n

**Configurar Slack:**
1. Crie um Incoming Webhook em https://api.slack.com/apps
2. No n8n: **Credentials** > **Slack Webhook API**
3. Cole a Webhook URL

**Configurar Discord:**
1. No Discord: **Server Settings** > **Integrations** > **Webhooks** > **New Webhook**
2. Copie a Webhook URL
3. Adicione ao workflow no campo `discord_webhook_url`

### 3. **github-webhook-deploy.json**
Deploy automático quando houver push na branch main.

**Funcionalidade:**
- Recebe webhook do GitHub
- Verifica se é branch main
- Executa `docker-compose pull && up -d`
- Envia notificação de sucesso

---

## Casos de Uso

### 1. 🚀 Deploy Automático
```
Git Push (main) → GitHub Actions → n8n → Docker Deploy → Slack Notification
```

### 2. 📊 Notificações de Build
```
GitHub Actions → n8n → Formatar Mensagem → Slack/Discord
```

### 3. 🔍 Monitoramento de PRs
```
PR Opened → GitHub Webhook → n8n → Notificar equipe → Atribuir reviewers
```

### 4. 📦 Release Automation
```
Release Published → n8n → Generate Changelog → Post to Discord → Update Docs
```

### 5. ⚠️ Alerta de Falhas
```
Build Failed → n8n → Send Alert → Create GitHub Issue → Notify Team
```

---

## Exemplo: Workflow Completo

### Cenário: Deploy com notificações

1. **Desenvolvedor faz push na branch main**
2. **GitHub Actions executa**:
   - Build Docker
   - Testes
   - Notifica n8n com status
3. **n8n processa**:
   - Valida branch
   - Verifica status do build
4. **Se sucesso**:
   - Dispara deploy via Docker
   - Envia mensagem no Slack: "✅ Deploy concluído!"
   - Registra no banco de dados
5. **Se falha**:
   - Envia alerta no Discord: "❌ Build falhou!"
   - Cria issue no GitHub
   - Notifica responsáveis

---

## Variáveis Disponíveis nos Webhooks

### Eventos do GitHub Actions
```json
{
  "event": "push|pull_request|release",
  "repository": "username/repo-name",
  "branch": "refs/heads/main",
  "commit_sha": "abc123...",
  "commit_message": "feat: nova funcionalidade",
  "author": "Nome do Autor",
  "workflow": "n8n Integration",
  "status": "success|failure",
  "run_id": "123456",
  "run_number": "42",
  "timestamp": "2025-12-19T10:30:00Z"
}
```

### Status de Build
```json
{
  "type": "build_status",
  "status": "success|failure",
  "emoji": "✅|❌",
  "message": "Build concluído com sucesso!",
  "repository": "username/repo",
  "branch": "refs/heads/main",
  "run_url": "https://github.com/..."
}
```

---

## Segurança

### Produção

1. **Use HTTPS**: Configure proxy reverso (Nginx/Traefik)
2. **Valide Webhooks**: Adicione secret no GitHub e valide no n8n
3. **Firewall**: Restrinja acesso à porta 5678
4. **Autenticação**: Ative autenticação básica ou OAuth2 no n8n

### Validar Secret do GitHub (opcional)

No n8n, adicione node de validação:

```javascript
// Node de Function
const crypto = require('crypto');
const secret = 'seu-secret-do-github';
const signature = $json.headers['x-hub-signature-256'];
const body = JSON.stringify($json.body);

const hmac = crypto.createHmac('sha256', secret);
const digest = 'sha256=' + hmac.update(body).digest('hex');

if (signature !== digest) {
  throw new Error('Invalid signature');
}

return $json;
```

---

## Troubleshooting

### Webhook não está funcionando

**1. Verifique se n8n está acessível:**
```bash
curl http://localhost:5678/webhook/github-events
```

**2. Veja logs do n8n:**
```bash
docker-compose logs -f n8n
```

**3. Verifique Recent Deliveries no GitHub:**
- GitHub > Settings > Webhooks > Recent Deliveries
- Veja o response code e payload

**4. Para localhost, use ngrok/localtunnel:**
```bash
ngrok http 5678
# Use a URL gerada no GitHub
```

### GitHub Actions não encontra secret

1. Verifique se o secret `N8N_WEBHOOK_URL` existe
2. Certifique-se que está no repositório correto
3. Re-execute o workflow manualmente

### n8n não está recebendo dados

1. Verifique se o workflow está **Active**
2. Veja **Executions** para erros
3. Teste com curl:
```bash
curl -X POST http://localhost:5678/webhook/github-events \
  -H "Content-Type: application/json" \
  -d '{"test": "data"}'
```

---

## Próximos Passos

- [ ] Configure secrets no GitHub
- [ ] Importe workflows no n8n
- [ ] Ative workflows
- [ ] Faça um push de teste
- [ ] Configure notificações (Slack/Discord)
- [ ] Customize workflows para suas necessidades

## Recursos

- [n8n Docs](https://docs.n8n.io)
- [GitHub Webhooks](https://docs.github.com/webhooks)
- [GitHub Actions](https://docs.github.com/actions)
