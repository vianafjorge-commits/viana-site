# Como Importar Workflows no n8n

## 📍 Localização dos Arquivos

Os arquivos estão em:
```
viana-site/
└── n8n-workflows/
    ├── github-events-handler.json          ← IMPORTAR ESTE PRIMEIRO
    ├── github-to-slack-discord.json        ← Notificações Slack/Discord
    ├── github-webhook-deploy.json          ← Deploy automático
    ├── health-monitor.json                 ← Monitoramento de saúde
    └── README.md
```

---

## ✅ Passo 1: Acesse n8n

1. Abra o navegador
2. Vá para: **http://localhost:5678**
3. Faça login com sua conta

---

## 📥 Passo 2: Importe os Workflows

### Método 1: Via Interface n8n (Recomendado)

1. Na página inicial do n8n, clique em **"Import Workflow"** (ícone com seta para dentro)

   Ou vá em: **Menu** (canto superior esquerdo) > **Workflows** > **Import from file**

2. Selecione o arquivo da pasta `n8n-workflows/`

   **Comece por este** (em ordem):
   1. `github-events-handler.json` ⭐
   2. `github-to-slack-discord.json`
   3. `health-monitor.json`
   4. `github-webhook-deploy.json`

3. Clique em **Open** ou **Import**

4. O workflow aparecerá na sua lista

---

## 🔧 Passo 3: Configure Credenciais

Antes de ativar, configure as credenciais necessárias:

### Para GitHub Events Handler
- Nenhuma credencial obrigatória (usa webhooks)

### Para GitHub to Slack/Discord
1. Vá em **Credentials** (lado esquerdo)
2. Clique em **Create New**
3. Selecione o tipo:
   - **Slack Webhook API** (para Slack)
   - **HTTP** (para Discord)
4. Cole as URLs dos webhooks

---

## ⚡ Passo 4: Ative o Workflow

1. Abra o workflow importado
2. No topo da tela, veja o botão **Active** (cinza/desativado)
3. Clique para ativar (fica azul/verde)
4. Verifique a URL do webhook exibida

---

## 📂 Método 2: Via Terminal (Alternativo)

Se precisar acessar os arquivos via terminal:

```bash
# Ir para a pasta do projeto
cd /private/tmp/viana-site

# Ver os arquivos
ls -la n8n-workflows/

# Copiar arquivo para local acessível
cp n8n-workflows/github-events-handler.json ~/Desktop/
```

---

## 🐳 Método 3: Via Docker (Se os arquivos não aparecerem)

Se o n8n não está vendo os arquivos:

```bash
# Verificar se o volume está montado
docker-compose exec n8n ls -la /home/node/.n8n/workflows

# Se vazio, copiar os arquivos
docker cp /private/tmp/viana-site/n8n-workflows/. n8n:/home/node/.n8n/workflows

# Reiniciar n8n
docker-compose restart n8n
```

---

## 🔍 Troubleshooting

### Problema: Não vejo o botão "Import Workflow"

**Solução:**
1. Certifique-se de que está logado
2. Clique no logo n8n no canto superior esquerdo
3. Vá para **Workflows** (menu)
4. Clique em **Import from file** ou **+** (criar novo)

### Problema: Arquivo não aparece na lista de seleção

**Solução:**
1. Certifique-se de que está na pasta `n8n-workflows/`
2. Verifique o caminho completo:
   ```bash
   ls -la /private/tmp/viana-site/n8n-workflows/
   ```
3. Se necessário, copie para local visível:
   ```bash
   cp /private/tmp/viana-site/n8n-workflows/*.json ~/Desktop/
   ```
4. Tente importar do Desktop

### Problema: Erro ao importar "Invalid JSON"

**Solução:**
1. Verifique se o arquivo não está corrompido
2. Tente recriar:
   ```bash
   cat /private/tmp/viana-site/n8n-workflows/github-events-handler.json
   ```
3. Se mostrar erro, delete e recrie o arquivo

### Problema: n8n não está rodando

**Solução:**
```bash
# Iniciar n8n
docker-compose up -d n8n

# Verificar se está rodando
docker-compose ps

# Ver logs
docker-compose logs n8n
```

---

## 📋 Checklist de Importação

- [ ] n8n está rodando (http://localhost:5678)
- [ ] Estou logado
- [ ] Encontro a pasta `n8n-workflows/` em `/private/tmp/viana-site/`
- [ ] Cliquei em **Import from file**
- [ ] Selecionei `github-events-handler.json`
- [ ] Cliquei em **Open/Import**
- [ ] Workflow aparece na lista
- [ ] Ativei o workflow (botão **Active**)
- [ ] Copiei a URL do webhook

---

## ✨ Após Importar

1. Anote a URL do webhook do workflow
2. Configure o secret no GitHub com essa URL
3. Faça um push de teste
4. Verifique em n8n > **Executions**

Pronto! 🎉
