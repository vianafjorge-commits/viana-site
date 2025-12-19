# n8n Setup Guide

## O que é n8n?

n8n é uma plataforma de automação de workflows open-source que permite criar automações visuais sem código. Integrado ao seu projeto, pode automatizar:
- Deploys
- Notificações
- Monitoramento
- Integrações com GitHub, Slack, Discord, etc.
- Processamento de dados

## Iniciar n8n

```bash
docker-compose up -d n8n
```

Acesse: `http://localhost:5678`

## Configuração Inicial

1. **Primeira vez**: Crie uma conta de administrador
2. **Credenciais**: Configure suas integrações (GitHub, Slack, etc.)
3. **Workflows**: Importe os workflows de exemplo

## Workflows Incluídos

### 1. GitHub Deploy Automation (`github-webhook-deploy.json`)
- Escuta webhooks do GitHub
- Detecta pushes na branch `main`
- Dispara deploy automático
- Envia notificações de sucesso

**Configuração**:
1. Importe o workflow no n8n
2. Ative o webhook em `http://localhost:5678/webhook/github-webhook`
3. Configure no GitHub: Settings > Webhooks > Add webhook
4. URL: `http://seu-servidor:5678/webhook/github-webhook`

### 2. Application Health Monitor (`health-monitor.json`)
- Verifica saúde da aplicação a cada 5 minutos
- Envia alertas se a aplicação estiver fora do ar
- Monitora status HTTP

**Customização**:
- Altere o intervalo de verificação
- Adicione notificações (Slack, Email, Discord)
- Configure thresholds personalizados

## Integrações Comuns

### GitHub
```
Credentials > Add New Credential > GitHub API
```
- Token: Crie em GitHub > Settings > Developer settings > Personal access tokens
- Permissões: `repo`, `workflow`, `admin:repo_hook`

### Slack
```
Credentials > Add New Credential > Slack
```
- Webhook URL ou OAuth token

### Discord
```
Credentials > Add New Credential > Discord Webhook
```
- Crie webhook no canal do Discord

### Email (SMTP)
```
Credentials > Add New Credential > SMTP
```
- Configure servidor SMTP (Gmail, SendGrid, etc.)

## Casos de Uso

### 1. Deploy Automático
```
GitHub Push → n8n → Docker Compose Pull & Up → Notificação
```

### 2. Monitoramento Contínuo
```
Cron (5min) → HTTP Check → If Error → Send Alert
```

### 3. Backup Automático
```
Cron (diário) → Backup DB → Upload S3 → Notificação
```

### 4. Notificações de Build
```
GitHub Actions → Webhook → n8n → Slack/Discord
```

## Comandos Úteis

```bash
# Iniciar apenas n8n
docker-compose up -d n8n

# Ver logs do n8n
docker-compose logs -f n8n

# Parar n8n
docker-compose stop n8n

# Reiniciar n8n
docker-compose restart n8n

# Backup dos workflows
docker-compose exec n8n cp -r /home/node/.n8n ./backup

# Restaurar workflows
docker cp backup/. n8n:/home/node/.n8n
```

## Variáveis de Ambiente

Edite `docker-compose.yml` para customizar:

```yaml
environment:
  - N8N_BASIC_AUTH_ACTIVE=true         # Ativar autenticação
  - N8N_BASIC_AUTH_USER=admin          # Usuário admin
  - N8N_BASIC_AUTH_PASSWORD=senha      # Senha admin
  - WEBHOOK_URL=https://seu-dominio    # URL pública para webhooks
  - GENERIC_TIMEZONE=America/Sao_Paulo # Fuso horário
  - N8N_ENCRYPTION_KEY=sua-chave       # Chave de criptografia
```

## Segurança

### Produção
1. **Ative autenticação básica** ou OAuth2
2. **Use HTTPS** com proxy reverso (Nginx/Traefik)
3. **Configure firewall** para limitar acesso à porta 5678
4. **Use variáveis de ambiente** para senhas
5. **Backup regular** dos workflows

### Exemplo Nginx Reverse Proxy
```nginx
server {
    listen 80;
    server_name n8n.seu-dominio.com;

    location / {
        proxy_pass http://localhost:5678;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Persistência de Dados

Workflows e credenciais são salvos em:
- Volume Docker: `n8n_data`
- Diretório local: `./n8n-workflows` (apenas workflows exportados)

## Troubleshooting

### n8n não inicia
```bash
# Verificar logs
docker-compose logs n8n

# Verificar permissões
sudo chown -R 1000:1000 n8n-workflows/
```

### Webhook não funciona
- Verifique se a URL está correta
- Confirme que o container está acessível
- Teste com `curl http://localhost:5678/healthz`

### Workflows não aparecem
- Certifique-se de importar os arquivos JSON via interface
- Verifique se o volume está montado corretamente

## Recursos

- Documentação oficial: https://docs.n8n.io
- Community: https://community.n8n.io
- Templates: https://n8n.io/workflows

## Próximos Passos

1. ✅ Inicie o n8n com `docker-compose up -d`
2. ✅ Acesse http://localhost:5678
3. ✅ Configure suas credenciais
4. ✅ Importe os workflows de exemplo
5. ✅ Customize para suas necessidades
6. ✅ Configure webhooks no GitHub
