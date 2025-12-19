# n8n Workflows

Este diretório contém workflows do n8n para automação do projeto.

## Workflows Disponíveis

### 1. **github-events-handler.json**
Handler principal que processa todos os eventos do GitHub via webhook.

### 2. **github-webhook-deploy.json**
Monitora pushes no repositório e dispara deploys automáticos.

### 3. **github-to-slack-discord.json**
Envia notificações de builds para Slack e Discord.

###Guia de Integração Completo

Para instruções detalhadas de como conectar GitHub com n8n, consulte:
**[GITHUB_N8N_INTEGRATION.md](../GITHUB_N8N_INTEGRATION.md)**

## Importando Workflows

1. Acesse n8n em `http://localhost:5678`
2. Vá em **Workflows** > **Import from File**
3. Selecione o arquivo JSON do workflow
4. Configure as credenciais necessárias
5. Ative o workflow (toggle no topo da tela)`
2. Vá em **Workflows** > **Import**
3. Selecione o arquivo JSON do workflow
4. Configure as credenciais necessárias

## Criando Novos Workflows

Você pode criar workflows personalizados no n8n para:
- Automação de deploys
- Notificações (Slack, Discord, Email)
- Integração com GitHub
- Monitoramento de aplicação
- Backup automático
- Processamento de dados
