# Solução: Webhook Não Registrado

## 🔴 Problema

```
This webhook is not registered for POST requests
```

O webhook do n8n não está sendo registrado corretamente.

---

## ✅ Solução

### Opção 1: Usar o novo workflow simples

1. **Delete** o workflow anterior:
   - No n8n: Selecione o workflow > Menu (⋮) > Delete

2. **Importe o novo**:
   - **Workflows** > **Import from file**
   - Selecione: `/private/tmp/viana-site/n8n-workflows/github-webhook-simple.json`

3. **Publish**:
   - Clique em "Publish"

4. **Teste**:
   ```bash
   curl -X POST http://localhost:5678/webhook/github-webhook \
     -H "Content-Type: application/json" \
     -d '{"event":"push","test":"data"}'
   ```

Deve retornar: `{"status":"success","message":"Webhook received"}`

---

### Opção 2: Reset completo (se a Opção 1 não funcionar)

```bash
# Parar n8n
docker-compose stop n8n

# Remover dados
docker volume rm viana-site_n8n_data

# Reiniciar
docker-compose up -d n8n

# Aguardar 10 segundos
sleep 10

# Abrir http://localhost:5678 e importar novamente
```

---

## 📝 Próximo Passo

Se conseguir fazer o webhook responder com sucesso, vamos:
1. Adicionar lógica de processamento
2. Conectar com GitHub Actions
3. Configurar notificações

Qual opção preferes? (1 ou 2) 🔧
