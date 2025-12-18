#!/bin/bash

# Script de Deploy Direto para Vercel (SEM GitHub)
# Execute com: bash deploy_vercel.sh

echo "=== DEPLOY PARA VERCEL ==="
echo "Este script fará deploy direto do seu site para Vercel"
echo ""

cd /private/tmp/viana-site

# Verificar se Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo "📦 Instalando Vercel CLI..."
    npm install -g vercel
fi

echo "🚀 Iniciando deploy..."
echo ""
echo "INSTRUÇÕES:"
echo "1. Você será pedido para fazer login no Vercel"
echo "2. Clique no link que aparecer no terminal"
echo "3. Autorize a conexão"
echo "4. Volta para o terminal"
echo ""
echo "Pressione ENTER para continuar..."
read

# Deploy
vercel --prod

echo ""
echo "✅ Deploy concluído!"
echo "Seu site está online! Abra o link que apareceu acima."
