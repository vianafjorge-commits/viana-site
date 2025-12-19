# Erro: Webhook Não Registrado - Solução Completa

## ❌ Erro Recebido
```
"The requested webhook 'POST github-events' is not registered"
```

## ✅ Causa e Solução

O workflow foi importado, **mas não está ATIVO**!

---

## 🔴 Passo-a-Passo para Ativar

### 1. Abra n8n
```
http://localhost:5678
```

### 2. Vá para Workflows
- Clique em **Workflows** (barra esquerda)
- Selecione **github-events-handler**

### 3. PROCURE O TOGGLE "ACTIVE"
**IMPORTANTE**: O toggle deve estar no **topo direito** da tela

```
┌─────────────────────────────────────────────────────────────┐
│ github-events-handler  [←] [↻]  [🔴 ACTIVE] [⋮]           │
└─────────────────────────────────────────────────────────────┘
                              ↑
                        Este botão!
```

### 4. CLIQUE PARA ATIVAR
- Se está **cinzento/desligado** (🔴) → **CLIQUE NELE**
- Deve ficar **azul/verde** (🟢)

### 5. Confirme
Depois de ativar, você deve ver:
```
Webhook URL:
http://localhost:5678/webhook/github-events
```

---

## 🧪 Teste Imediato

Abra um novo terminal e execute:

```bash
curl -X POST http://localhost:5678/webhook/github-events \
  -H "Content-Type: application/json" \
  -d '{
    "event": "push",
    "repository": "test/repo",
    "branch": "refs/heads/main",
    "commit_message": "Test"
  }'
```

**Deve retornar**:
```json
{"status":"success"}
```

Se ainda der erro **404 ou 405**, significa que o workflow não está ativo.

---

## 🆘 Se Ainda Não Funcionar

### Opção 1: Verificar via Docker

```bash
# Ver status do workflow
docker-compose exec n8n n8n list:workflows

# Você deve ver algo como:
# ID      Name                        Active
# abc123  github-events-handler       false  ← DEVE SER "true"
```

### Opção 2: Ativar via Terminal

```bash
# Lista os workflows com ID
docker-compose exec n8n n8n list:workflows

# Copie o ID (ex: 1) e ative:
docker-compose exec n8n n8n workflow:activate 1
```

### Opção 3: Reset Completo

Se nada funcionar:

```bash
# Parar tudo
docker-compose down

# Remover volumes
docker volume rm viana-site_n8n_data

# Reiniciar
docker-compose up -d n8n

# Aguardar 10 segundos
sleep 10

# Aceder a http://localhost:5678 e importar novamente
```

---

## 📋 Checklist Completo

- [ ] n8n está acessível: http://localhost:5678
- [ ] Consegui entrar/fazer login
- [ ] Fui para **Workflows**
- [ ] Selecionei **github-events-handler**
- [ ] **PROCUREI O TOGGLE "ACTIVE"** no topo direito
- [ ] **CLIQUEI PARA ATIVAR** (ficou azul)
- [ ] Aparecer a URL do webhook
- [ ] Copiei a URL
- [ ] Testei com curl
- [ ] Recebeu `{"status":"success"}`

---

## 📸 Visual Guide (Se não sabe onde é)

### Onde está o botão "ACTIVE"?

```
Na página do editor do workflow, bem no topo:

[Logo n8n]  [Workflow Name]  [Button]  [Button]  [🔴ACTIVE]  [Menu]
                                                      ↑
                                              ESTE BOTÃO!
```

### Como ativa?

```
ANTES:                          DEPOIS:
[🔴 ACTIVE] (cinzento)   →   [🟢 ACTIVE] (azul/verde)
```

---

## ✨ Sucesso!

Se seguiu todos os passos e conseguiu ver:
```
{"status":"success"}
```

Parabéns! 🎉 O webhook está funcionando!

### Próximos passos:
1. Configure o secret no GitHub: `N8N_WEBHOOK_URL`
2. Faça um push de teste
3. Veja em n8n > **Executions**

---

Qual é exatamente o erro que vê? 
- [ ] "Webhook not registered"
- [ ] "404 Not Found"
- [ ] Outro: ________________

Diz-me e ajudo! 📍
